import React, { useState } from 'react';
import { login } from '../../controllers/authController';
const Login = () => {
	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');

	const enteredEmailHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const enteredPasswordHandler = (event) => {
		setEnteredPassword(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		login({ email: enteredEmail, password: enteredPassword });
	};

	return (
		<form className="login" onSubmit={submitHandler}>
			<div className="login__controls">
				<div className="login__control">
					<label>Email</label>
					<input
						type="text"
						value={enteredEmail}
						onChange={enteredEmailHandler}
					/>
				</div>
				<div className="login__control">
					<label>Password</label>
					<input
						type="text"
						value={enteredPassword}
						onChange={enteredPasswordHandler}
					/>
				</div>
			</div>
			<div>
				<a href="">Forgotten Password</a>
			</div>
			<div>
				<button type="submit" className="btn-white">
					Login
				</button>
			</div>
			<div>
				<button type="button" className="btn-white">
					Register
				</button>
			</div>
		</form>
	);
};

export default Login;
