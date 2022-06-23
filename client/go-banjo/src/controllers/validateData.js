export const validateEnteredName = (event) => {
	const name = event.target.value;
	let obj = { style: 'valid', data: name };

	if (/[^a-zA-Z]+/g.test(name) || name.length > 30) {
		obj = { style: 'invalid', data: name };
	}

	return obj;
};

export const validateEnteredEmail = (event) => {
	const email = event.target.value;
	let obj = { style: 'valid', data: email };

	if (!email) {
		obj = { style: 'invalid', data: email };
	}

	return obj;
};

export const validateEnteredPassword = (event) => {
	const password = event.target.value;
	let obj = { style: 'valid', data: password };

	if (password.length < 8) {
		obj = { style: 'invalid', data: password };
	}

	return obj;
};

export const validateEnteredConfirmPassword = (event, enteredPassword) => {
	const confirmPassword = event.target.value;
	let obj = { style: 'valid', data: confirmPassword };

	if (enteredPassword !== confirmPassword) {
		obj = { style: 'invalid', data: confirmPassword };
	}

	return obj;
};
