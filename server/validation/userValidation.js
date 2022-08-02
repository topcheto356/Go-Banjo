const validator = require('validator');

exports.userName = (name) => {
	return (
		validator.isAlpha(name.replaceAll('-', ''), ['en-US']) && name.length <= 30
	);
};

exports.email = (email) => {
	return validator.isEmail(email);
};

exports.password = (password) => {
	return password.length >= 8;
};

exports.passwordConfirm = (password, passwordConfirm) => {
	return password === passwordConfirm;
};
