const multer = require('multer');
const sharp = require('sharp');

const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

// const multerStorage = multer.diskStorage({
// 	destination: (req, file, cb) => {
// 		cb(null, '../client/go-banjo/src/img/users');
// 	},
// 	filename: (req, file, cb) => {
// 		// user-user.id-currentTimeStamp
// 		// user-ms8f3bcw2341d-1324612341.jpeg

// 		const ext = file.mimetype.split('/')[1];

// 		cb(null, `user-${req.user._doc._id}-${Date.now()}.${ext}`);
// 	},
// });

//store image as buffer
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image')) {
		cb(null, true);
	} else {
		cb(new AppError('Not image, please upload only images', 400), false);
	}
};

const upload = multer({
	storage: multerStorage,
	fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
	if (!req.file) return next();

	req.file.filename = `user-${req.user._doc._id}-${Date.now()}.jpeg`;
	const url = req.protocol + '://' + req.get('host');
	await sharp(req.file.buffer)
		.resize(500, 500)
		.toFormat('jpeg')
		.jpeg({ quality: 90 })
		.toFile(`./img/users/${req.file.filename}`);

	req.body.photoPath = `${url}/img/users/${req.file.filename}`;
	next();
});

//filter the updated data
const filterObj = (obj, allowedFields) => {
	const newObj = {};
	Object.keys(obj).forEach((el) => {
		if (allowedFields.includes(el)) newObj[el] = obj[el];
	});
	return newObj;
};

exports.getMe = (req, res, next) => {
	req.params.id = req.user.id;
	next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
	// create error if user post password data
	if (req.body.password || req.body.passwordConfirm) {
		return next(
			new AppError(
				'This route is not for password update. Please use /updateMyPassword',
				400
			)
		);
	}

	//filter fields names that are not allowed to be updated
	const allowedFields = ['firstName', 'lastName', 'photo', 'photoPath'];

	const filteredBody = filterObj(req.body, allowedFields);

	if (req.file) filteredBody.photo = req.file.filename;

	// update doc
	const updatedUser = await User.findByIdAndUpdate(
		req.user._doc._id,
		filteredBody,
		{
			new: true,
			runValidators: true,
		}
	);

	res.status(200).json({
		status: 'success',
		data: {
			user: updatedUser,
		},
	});
});

exports.deleteMe = catchAsync(async (req, res, next) => {
	await User.findByIdAndUpdate(req.user._doc._id, { active: false });

	res.status(204).json({
		status: 'success',
		data: null,
	});
});

exports.getAllUsers = factory.getAll(User);

exports.getUser = factory.getOne(User);

exports.createUser = (req, res) => {
	res.status(500).json({
		status: 'err',
		message: 'This route is not yet defined! Please use sign up instead',
	});
};

exports.deleteUser = factory.deleteOne(User);

//Do Not update password with this
exports.updateUser = factory.updateOne(User);
