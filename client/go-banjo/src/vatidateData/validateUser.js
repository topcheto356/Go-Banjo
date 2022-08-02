import validator from 'validator';

const validateUserData = {
	userName(event) {
		const name = event.target.value;
		let obj = { style: 'valid', data: name };

		if (
			!validator.isAlpha(name.replaceAll('-', ''), ['en-US']) ||
			name.length > 30
		) {
			obj = { style: 'invalid', data: name };
		}

		return obj;
	},

	email(event) {
		const email = event.target.value;
		let obj = { style: 'valid', data: email };

		if (!validator.isEmail(email)) {
			obj = { style: 'invalid', data: email };
		}

		return obj;
	},

	password(event) {
		const password = event.target.value;
		let obj = { style: 'valid', data: password };

		if (password.length < 8) {
			obj = { style: 'invalid', data: password };
		}

		return obj;
	},

	confirmPassword(event, Password) {
		const confirmPassword = event.target.value;
		let obj = { style: 'valid', data: confirmPassword };

		if (Password !== confirmPassword) {
			obj = { style: 'invalid', data: confirmPassword };
		}

		return obj;
	},
};

export default validateUserData;
