const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const userValidation = require('../validation/userValidation');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		trim: true,
		require: [true, 'User must have a name'],
		validate: {
			validator: function (name) {
				userValidation.userName(name);
			},
			message: 'Enter valid First name',
		},
	},
	lastName: {
		type: String,
		trim: true,
		require: [true, 'User must have a name'],
		validate: {
			validator: function (name) {
				userValidation.userName(name);
			},
			message: 'Enter valid Last name',
		},
	},
	email: {
		type: String,
		require: [true, 'User must have an email'],
		unique: [true, 'There is registered user with that email'],
		validate: {
			validator: function (email) {
				userValidation.email(email);
			},
			message: 'Enter valid email',
		},
	},
	password: {
		type: String,
		require: [true, 'User must have a password'],
		select: false,
		validate: {
			//only work on CREATE and SAVE!!!
			validator: function (pass) {
				return userValidation.password(pass);
			},
			message: `A password must be minimum 8 characters`,
		},
	},
	passwordConfirm: {
		type: String,
		required: [true, 'Confirm your password'],
		validate: {
			//only work on CREATE and SAVE!!!
			validator: function (el) {
				return userValidation.passwordConfirm(el, this.password);
			},
			message: `Passwords are NOT the same`,
		},
	},
	photo: {
		type: String,
		default: 'default.jpeg',
	},
	photoPath: {
		type: String,
		default: 'img/users/default.jpeg',
	},
	role: {
		type: String,
		enum: ['user', 'owner', 'admin'],
		default: 'user',
	},
	active: {
		//Used when deleting
		type: Boolean,
		default: true,
		select: false,
	},
	emailChangedAt: Date,
	passwordChangedAt: Date,
	passwordResetToken: String,
	passwordResetExpires: String,
});

//hashing the password
userSchema.pre('save', async function (next) {
	//this point to the current doc

	//if password field not changed
	//Maybe not needed
	if (!this.isModified('password')) return next();

	//hash is async func
	this.password = await bcrypt.hash(this.password, 12);

	//delete the passwordConfirm field (required only for the validation)
	this.passwordConfirm = undefined;

	next();
});

//not show deleted users (active:false)
userSchema.pre(/^find/, function (next) {
	//this point to the current query
	this.find({ active: { $ne: false } });

	next();
});

//instance method
userSchema.methods.correctPassoword = async function (
	candidatePassword,
	userPassword
) {
	return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
	// passwordChangedAt may not be even created
	if (this.passwordChangedAt) {
		//returned in msec and needed in sec
		const changedTimestamp = parseInt(
			this.passwordChangedAt.getTime() / 1000,
			10
		);

		return JWTTimestamp < changedTimestamp;
	}

	//False === Not changed
	return false;
};

userSchema.methods.changedEmailAfter = function (JWTTimestamp) {
	// passwordChangedAt may not be even created
	if (this.emailChangedAt) {
		//returned in msec and needed in sec
		const changedTimestamp = parseInt(this.emailChangedAt.getTime() / 1000, 10);

		return JWTTimestamp < changedTimestamp;
	}

	//False === Not changed
	return false;
};

userSchema.methods.createPasswordResetToken = function () {
	const resetToken = crypto.randomBytes(32).toString('hex');

	this.passwordResetToken = crypto
		.createHash('sha256')
		.update(resetToken)
		.digest('hex');

	// expires in 10 min
	this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

	// this only modifies the data (Not saving it)
	return resetToken;
};

userSchema.methods.validatePasswordAndReturnHashed = async function (
	password,
	passwordConfirm
) {
	//checks if the password === passwordConfirm
	if (!userValidation.passwordConfirm(password, passwordConfirm)) {
		return next(new AppError('Passwords are NOT the same', 401));
	}

	//validate password
	if (!userValidation.password(password)) {
		return next(new AppError('A password must be minimum 8 characters', 401));
	}

	//hashing the password
	const hashedPassword = await bcrypt.hash(password, 12);

	return hashedPassword;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
