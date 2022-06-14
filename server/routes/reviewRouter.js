const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');
const express = require('express');

// by defauth each router has access to params in there specific route
// in the post route there is no tourId in order to get access, it shoud merge the params
const router = express.Router({ mergeParams: true });

//only authenticated users can acce	ss to reviews
router.use(authController.protect);

router
	.route('/')
	.get(reviewController.getAllReviews)
	.post(
		authController.restrictTo('user'),
		reviewController.setHouseUserIds,
		reviewController.createReview
	);

router.route('/:id').get(reviewController.getReview);
// .patch(
// 	authController.restrictTo('user', 'admin'),
// 	reviewController.updateReview
// );
// .delete(
// 	authController.restrictTo('user', 'admin'),
// 	reviewController.deleteReview
// );

module.exports = router;
