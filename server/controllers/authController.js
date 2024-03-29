const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const sendEmail = require('../utils/email');

//create a JWT
const signToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN,
	});
};

//createAndSendToken to logded in user
const createAndSendToken = (user, statusCode, res) => {
	const token = signToken(user._id);

	//not show the password in the output
	user.password = undefined;

	res.status(statusCode).json({
		status: 'success',
		token,
		data: {
			user,
		},
	});
};

exports.signUp = catchAsync(async (req, res, next) => {
	const newUser = await User.create({
		//Not add unwanted data
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	});

	//log user in
	createAndSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;

	// checks if the password and email exist
	if (!email || !password)
		next(new AppError('Please provide email and password'), 400);

	// check if the user exist and the password is correct
	const user = await User.findOne({ email }).select('+password');

	if (!user || !(await user.correctPassoword(password, user.password))) {
		return next(new AppError('Incorrect email or password', 401));
	}

	//log user in
	createAndSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
	//  get token and check of its's there
	let token = req.header('x-auth-token');

	// if (
	//     req.headers.authorization &&
	//     req.headers.authorization.startsWith('x-auth-token')
	// ) {
	//     token = req.headers.authorization.split(' ')[1];
	// }

	if (!token) {
		return next(
			new AppError('You are not logged in! Please log in to get access.', 401)
		);
	}

	// verification token
	const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
	// { id: '62a1d01668dd63bc9b9adca9', iat: 1654771734, exp: 1662547734 }

	// checks if the user still exist (user is deleted after token issued)
	const freshUser = await User.findById(decoded.id);

	if (!freshUser) return next(new AppError('The user no longer exist', 401));

	// checks if the user changed his password or email after the token was issued
	if (
		freshUser.changedPasswordAfter(decoded.iat) ||
		freshUser.changedEmailAfter(decoded.iat)
	) {
		return next(
			new AppError('User changed password or email. Please log in again', 401)
		);
	}

	//grand access to protected route
	req.user = { ...freshUser, token: token };

	next();
});

exports.restrictTo = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return next(
				new AppError('You don not have pemission to perform this action', 403)
			);
		}
		next();
	};
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
	// get user on given email
	const user = await User.findOne({ email: req.body.email });

	if (!user) {
		return next(new AppError('There is no user with that email', 404));
	}

	// generate the random reset token
	const resetToken = user.createPasswordResetToken();

	//save the data
	await user.save({ validateBeforeSave: false });

	// send email
	const resetURL = `${req.protocol}://${req.get(
		'host'
	)}/users/resetPassword/${resetToken}`;

	const message = `Go to the link to reset the password: ${resetURL}`;

	//if error in sendEmail
	try {
		await sendEmail({
			email: user.email,
			subject: 'Your password reset Token. Valid for 10min',
			message,
		});
		res.status(200).json({
			status: 'success',
			message: 'Token send',
		});
	} catch (err) {
		//Maybe need to fix
		user.passwordResetToken = undefined;
		user.passwordResetExpires = undefined;
		await user.save({ validateBeforeSave: false });

		next(
			new AppError(
				'There was a problem sending the email. Please try again later',
				500
			)
		);
	}
});

exports.resetPassword = catchAsync(async (req, res, next) => {
	// hash thee token to compare it
	const hashedToken = crypto
		.createHash('sha256')
		.update(req.params.token)
		.digest('hex');

	// get user based on token and check if the token is expired
	const user = await User.findOne({
		passwordResetToken: hashedToken,
		passwordResetExpires: { $gt: Date.now() },
	});

	if (!user) {
		return next('Token is invalid pr has expired', 400);
	}

	//set new password

	//Maybe need to fix
	user.password = req.body.password;
	user.passwordConfirm = req.body.passwordConfirm;
	user.passwordResetExpires = undefined;
	user.passwordResetToken = undefined;

	//Maybe need to fix
	await user.save();

	//log user in
	createAndSendToken(user, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
	//get user
	const user = await User.findById(req.user._doc._id).select('+password');

	//check id POSTed password is correct
	if (!(await user.correctPassoword(req.body.passwordCurrent, user.password))) {
		return next(new AppError('Your current password is wrong.', 401));
	}

	//hashing password
	const hashedPassword = user.validatePasswordAndReturnHashed(
		req.body.password,
		req.body.passwordConfirm
	);

	//update password
	const updatedUser = await User.findByIdAndUpdate(
		req.user._doc._id,
		{
			password: hashedPassword,
			passwordChangedAt: Date.now() - 1000,
		},
		{
			new: true,
		}
	);

	//log user in, send JWT
	createAndSendToken(updatedUser, 200, res);
});

//change email
exports.updateEmail = catchAsync(async (req, res, next) => {
	//get user
	const user = await User.findById(req.user._doc._id).select('+password');

	//check id POSTed password is correct
	if (!(await user.correctPassoword(req.body.passwordCurrent, user.password))) {
		return next(new AppError('Your password is wrong.', 401));
	}

	//update email
	const updatedUser = await User.findByIdAndUpdate(
		req.user._doc._id,
		{
			email: req.body.email,
			emailChangedAt: Date.now() - 1000,
		},
		{
			new: true,
			runValidators: true,
		}
	);

	//log user in, send JWT
	createAndSendToken(updatedUser, 200, res);
});

// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
	const { token } = req.user;

	if (token) {
		try {
			// 1) verify token
			const decoded = await promisify(jwt.verify)(
				token,
				process.env.JWT_SECRET
			);

			// 2) Check if user still exists
			const currentUser = await User.findById(decoded.id);
			if (!currentUser) {
				return next();
			}

			// 3) Check if user changed password after the token was issued
			if (currentUser.changedPasswordAfter(decoded.iat)) {
				return next();
			}

			// THERE IS A LOGGED IN USER
			// res.locals.user = currentUser;
			res.status(200).json({ ...currentUser, token });
		} catch (err) {
			return next();
		}
	}
};
