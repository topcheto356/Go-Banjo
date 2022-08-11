const validateHouseReview = {
	review(event) {
		const review = event.target.value;
		let obj = { style: 'valid', data: review };

		if (review.length > 5000) {
			obj = { style: 'invalid', data: review };
		}

		return obj;
	},

	rating(event) {
		const rating = event.target.value;
		let obj = { style: 'valid', data: rating };

		if (rating < 1 || rating > 5) {
			obj = { style: 'invalid', data: rating };
		}

		return obj;
	},
};

export default validateHouseReview;
