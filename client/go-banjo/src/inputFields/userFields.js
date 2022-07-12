import validateUserData from '../vatidateData/validateUser';

/*
    {
		name: Label name,
		type: input type,
		validate: Validator,
		errMessage: Error message,
		field: field name,
	}
*/

const userFields = [
	{
		name: 'First Name',
		type: 'text',
		validate: validateUserData.userName,
		errMessage: 'First name must be less than 30 characters and only letters',
		field: 'firstName',
	},
	{
		name: 'Last Name',
		type: 'text',
		validate: validateUserData.userName,
		errMessage: 'Last name must be less than 30 characters and only letters',
		field: 'lastName',
	},
	{
		name: 'Email (ENTER LEGIT EMAIL)',
		type: 'text',
		validate: validateUserData.email,
		errMessage: 'Enter valid email',
		field: 'email',
	},
	{
		name: 'Password',
		type: 'text',
		validate: validateUserData.password,
		errMessage: 'A password must be minimum 8 characters',
		field: 'password',
	},
	{
		name: 'Confirm Password',
		type: 'text',
		validate: validateUserData.confirmPassword,
		errMessage: 'Passwords are NOT the same',
		field: 'passwordConfirm',
		enteredPassword: '',
	},
	{
		name: 'Account photo',
		type: 'file',
		accept: 'image/*',
		field: 'photo',
	},
];

export default userFields;
