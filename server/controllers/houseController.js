const multer = require('multer');
const sharp = require('sharp');

const House = require('../models/houseModel');
const AppError = require('../utils/appError.js');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

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

exports.uploadHouseImages = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 5 },
]);

exports.resizeHouseImages = catchAsync(async (req, res, next) => {
    if (!req.files.imageCover || !req.files.images) return next();

    // cover image
    req.body.imageCover = `tour-${req.params.id}-${Date.now()}-cover.jpeg`;

    await sharp(req.files.imageCover[0].buffer)
        .resize(2000, 1333)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`../client/go-banjo/src/img/houses/${req.body.imageCover}`);

    next();
});

// Create new guest house
exports.createHouse = factory.createOne(House);

// Get guest house
exports.getHouse = factory.getOne(House, { path: 'reviews' });

// Get all  guest house
exports.getAllHouses = factory.getAll(House);

// Delete guest house
exports.deleteHouse = factory.deleteOne(House);

// Update guest house
exports.updateHouse = factory.updateOne(House);

// Get top 5 houses
exports.topHouses = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingAverage,price';
    req.query.fields = 'name,price,ratingsAverage';

    next();
};
