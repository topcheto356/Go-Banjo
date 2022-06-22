import React, { Fragment, useState } from 'react';
import { register } from '../../controllers/authController.js';
import {
	validateEnteredName,
	validateEnteredPassword,
} from '../../controllers/validateData';
const Register = () => {
	const [enteredFirstName, setEnteredFirstName] = useState('');
	const [enteredLastName, setEnteredLastName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

	const enteredFirstNameHandler = (event) => {
		const { style, name } = validateEnteredName(event);

		const firstNameStyle = style;

		setEnteredFirstName(name);
	};
	const enteredLastNameHandler = (event) => {
		const { style, name } = validateEnteredName(event);

		const lastNameStyle = style;

		setEnteredLastName(name);
	};
	const enteredEmailHandler = (event) => {
		const { style, email } = validateEnteredName(event);

		const emailStyle = style;

		setEnteredEmail(email);
	};
	const enteredPasswordHandler = (event) => {
		const { style, password } = validateEnteredPassword(event);

		const passwordStyle = style;

		setEnteredPassword(password);
	};
	const enteredConfirmPasswordHandler = (event, enteredPassword) => {
		const { style, confirmPassword } = validateEnteredPassword(event);

		const confirmPasswordStyle = style;

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
		<Fragment>
			<form className="auth" onSubmit={submitHandler}>
				<div className="auth__controls">
					<div className="auth__control">
						<label className="auth__label">First Name</label>
						<input
							className="auth__input"
							type="text"
							value={enteredFirstName}
							onChange={enteredFirstNameHandler}
						/>
					</div>
					<div className="auth__control">
						<label className="auth__label">Last Name</label>
						<input
							className="auth__input"
							type="text"
							value={enteredLastName}
							onChange={enteredLastNameHandler}
						/>
					</div>
					<div className="auth__control">
						<label className="auth__label">Email</label>
						<input
							className="auth__input"
							type="text"
							value={enteredEmail}
							onChange={enteredEmailHandler}
						/>
					</div>
					<div className="auth__control">
						<label className="auth__label">Password</label>
						<input
							className="auth__input"
							type="text"
							value={enteredPassword}
							onChange={enteredPasswordHandler}
						/>
					</div>
					<div className="auth__control">
						<label className="auth__label">Confirm Password</label>
						<input
							className="auth__input"
							type="text"
							value={enteredConfirmPassword}
							onChange={enteredConfirmPasswordHandler}
						/>
					</div>
				</div>
				<div>
					<button type="submit" className="btn-square">
						Register
					</button>
				</div>
			</form>
			<div className="img-container"></div>
		</Fragment>
	);
};

export default Register;
