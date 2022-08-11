const mongoose = require('mongoose');
const slugify = require('slugify');

const houseValidation = require('../validation/houseValidation');

const houseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'A house must have a name'],
			unique: true,
			trim: true,
			validate: {
				validator: function (el) {
					return houseValidation.houseName(el);
				},
				message: 'A house name is Not valid',
			},
		},
		slug: String,
		maxGroupSize: {
			type: Number,
			required: [true, 'A house must have a group size'],
			min: [1, 'A house must have a group size of 1'],
			intiger: [true, 'Enter intiger number as a group size'],
		},
		ratingsAverage: {
			type: Number,
			default: 3,
			min: [1, 'Rating must be above 1.0'],
			maxLength: [5, 'Rating must be less than 5.0'],
		},
		ratingsQuantity: {
			type: Number,
			default: 0,
		},
		price: {
			type: Number,
			required: [true, 'A house must have a price'],
		},
		summary: {
			type: String,
			trim: true,
			required: [true, 'A house must have a summary'],
			maxLength: [250, 'A house summary must be less than 250 characters'],
		},
		description: {
			type: String,
			trim: true,
			required: [true, 'A house must have a summary'],
			maxLength: [1500, 'A house summary must be less than 1500 characters'],
		},
		imageCover: {
			type: String,
			default: 'default.jpeg',
		},
		imageCoverPath: {
			type: String,
			default: '/img/houses/default.jpeg',
		},
		// images: {
		// 	type: [String],
		// 	default: ['default.jpeg', 'default.jpeg', 'default.jpeg'],
		// 	validate: {
		// 		//ignore white spaces and '-'
		// 		validator: function (images) {
		// 			return images.length >= 3 && images.length <= 5;
		// 		},
		// 		message: 'A house images must be between 3 and 5',
		// 	},
		// },
		imagesPath: {
			type: [String],
			default: [
				'/img/houses/default.jpeg',
				'/img/houses/default.jpeg',
				'/img/houses/default.jpeg',
			],
		},
		location: {
			type: String,
			required: [true, 'A house must have a location'],
			maxLength: [100, 'A house location must be less than 100 characters'],
		},
		owner: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
		},
	},
	{
		//to use virtual properties
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

houseSchema.index({ slug: 1 });

// virtual populate
houseSchema.virtual('reviews', {
	ref: 'Review',
	foreignField: 'house',
	localField: '_id',
});

// Document middleware
//runs only before .save, .create
houseSchema.pre('save', function (next) {
	//create a name to be used for better looking url
	this.slug = slugify(this.name, { lower: true });
	next();
});

// Query middleware

//to populate owner field
houseSchema.pre(/^find/, function (next) {
	this.populate({
		path: 'owner',
		select: '-__v -passwordChangedAt',
	});
	next();
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
