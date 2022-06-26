import validateHouseData from '../vatidateData/validateHouse.js';

/*
    {
		name: Label name,
		type: input type,
		validate: Validator,
		errMessage: Error message,
		field: field name,
	}
*/

const houseFields = [
    {
        name: 'Name',
        type: 'text',
        validate: validateHouseData.houseName,
        errMessage: 'A house name must have less or equal than 40 characters',
        field: 'name',
    },
    {
        name: 'Location',
        type: 'text',
        validate: validateHouseData.location,
        errMessage: 'Location must have less or equal than 40 characters',
        field: 'location',
    },
    {
        name: 'Image Cover',
        type: 'text',
        validate: validateHouseData.imageCover,
        errMessage: 'Image cover must have less or equal than 40 characters',
        field: 'imageCover',
    },
    {
        name: 'Summary',
        type: 'text',
        validate: validateHouseData.summary,
        errMessage: 'Summary must have less or equal than 40 characters',
        field: 'summary',
    },
    {
        name: 'Description',
        type: 'text',
        validate: validateHouseData.description,
        errMessage: 'Description must have less or equal than 40 characters',
        field: 'description',
    },
    {
        name: 'Price',
        type: 'number',
        validate: validateHouseData.price,
        errMessage: 'Price must have less or equal than 40 characters',
        field: 'price',
    },
    {
        name: 'Max Group Size',
        type: 'number',
        validate: validateHouseData.maxGroupSize,
        errMessage: 'Max group size must have less or equal than 40 characters',
        field: 'maxGroupSize',
    },
];

export default houseFields;
