import React, { useState } from 'react';import { register } from '../../controllers/authController';
const Register = () => {
	const [enteredFirstName, setEnteredFirstName] = useState('');
	const [enteredLastName, setEnteredLastName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

	const enteredFirstNameHandler = (event) => {
		const firstName = event.target.value;

		if (/[^a-zA-Z]+/g.test(firstName) || firstName.lenght) {
		}
		setEnteredFirstName(firstName);
	};
	const enteredLastNameHandler = (event) => {
		const lastName = event.target.value;

		if (/[^a-zA-Z]+/g.test(lastName) || lastName.lenght) {
		}

		setEnteredLastName(lastName);
	};
	const enteredEmailHandler = (event) => {
		setEnteredEmail(event.target.value);
	};
	const enteredPasswordHandler = (event) => {
		const password = event.target.value;

		if (password.lenght < 8) {
		}
		setEnteredPassword(password);
	};
	const enteredConfirmPasswordHandler = (event) => {
		const confirmPassword = event.target.value;

		if (enteredPassword !== confirmPassword) {
		}
		setEnteredConfirmPassword(confirmPassword);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		register({
			firstName: enteredFirstName,
			lastName: enteredLastName,
			email: enteredEmail,
			password: enteredPassword,
			passwordConfirm: enteredConfirmPassword,
		});
	};

	return (
		<form className="auth" onSubmit={submitHandler}>
			<div className="auth__controls">
				<div className="auth__control">
					<label>First Name</label>
					<input
						type="text"
						value={enteredFirstName}
						onChange={enteredFirstNameHandler}
					/>
				</div>
				<div className="auth__control">
					<label>Last Name</label>
					<input
						type="text"
						value={enteredLastName}
						onChange={enteredLastNameHandler}
					/>
				</div>
				<div className="auth__control">
					<label>Email</label>
					<input
						type="text"
						value={enteredEmail}
						onChange={enteredEmailHandler}
					/>
				</div>
				<div className="auth__control">
					<label>Password</label>
					<input
						type="text"
						value={enteredPassword}
						onChange={enteredPasswordHandler}
					/>
				</div>
				<div className="auth__control">
					<label>Confirm password</label>
					<input
						type="text"
						value={enteredConfirmPassword}
						onChange={enteredConfirmPasswordHandler}
					/>
				</div>
			</div>
			<div>
				<button type="submit" className="btn-white">
					Register
				</button>
			</div>
		</form>
	);
};

export default Register;
