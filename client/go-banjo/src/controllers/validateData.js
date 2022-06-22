export const validateEnteredName = (event) => {	const name = event.target.value;
	let obj = { style: 'valid', name };

	if (/[^a-zA-Z]+/g.test(name) || name.length > 30) {
		obj = { style: 'invalid', name };
	}

	return obj;
};

export const validateEnteredPassword = (event) => {
	const password = event.target.value;
	let obj = { style: 'valid', password };

	if (password.lenght < 8) {
		obj = { style: 'invalid', password };
	}

	return obj;
};

export const validateEnteredConfirmPassword = (event, enteredPassword) => {
	const confirmPassword = event.target.value;
	let obj = { style: 'valid', confirmPassword };

	if (enteredPassword !== confirmPassword) {
		obj = { style: 'invalid', confirmPassword };
	}

	return obj;
};

export const validateEmail = (event) => {
	const email = event.target.value;
	let obj = { style: 'valid', email };

	if (email) {
		obj = { style: 'invalid', email };
	}

	return obj;
};
