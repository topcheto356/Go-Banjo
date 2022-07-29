exports.password = (password) => {
	return password.length >= 8;
};

exports.passwordConfirm = (password, passwordConfirm) => {
	return password === passwordConfirm;
};
