import validateHouseReview from '../vatidateData/validateReview';

/*
    {
		name: Label name,
		type: input type,
		validate: Validator,
		errMessage: Error message,
		field: field name,
	}
*/

const reviewFields = [
	{
		name: 'Review',
		type: 'text',
		validate: validateHouseReview.review,
		errMessage: 'Review must be less than 500 characters and only letters',
		field: 'review',
	},
	{
		name: 'Rating',
		type: 'number',
		validate: validateHouseReview.rating,
		errMessage: 'Review rating must be between 1 and 5. (1, 2, 3, 4, 5)',
		field: 'rating',
	},
];

export default reviewFields;
