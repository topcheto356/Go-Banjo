const validator = require('validator');

exports.houseName = (name) => {
	//ignore white spaces and '-'
	//and less than 40 characters
	return (
		validator.isAlpha(name.replaceAll(/[\s-]+/g, ''), ['en-US']) &&
		name.length <= 40
	);
};
