import React, { Fragment, useState } from 'react';
import Icon from '../Icons';
import {
	validateEnteredName,
	validateEmail,
} from '../../controllers/validateData';

const Account = () => {
	const user = 'UserInfo';

	let firstNameStyle, lastNameStyle, emailStyle;

	const [enteredFirstName, setEnteredFirstName] = useState('');
	const [enteredLastName, setEnteredLastName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');

	const [update, setUpdate] = useState(true);
	const switchHandler = (e) => {
		setUpdate(!update);
	};

	const enteredFirstNameHandler = (event) => {
		const { style, name } = validateEnteredName(event);

		firstNameStyle = style;

		setEnteredFirstName(name);
	};

	const enteredLastNameHandler = (event) => {
		const { style, name } = validateEnteredName(event);

		lastNameStyle = style;

		setEnteredLastName(name);
	};

	const enteredEmailHandler = (event) => {
		const { style, email } = validateEmail(event);

		emailStyle = style;

		setEnteredEmail(email);
	};

	const submitHandler = (event) => {
		event.preventDefault();
	};

	return (
		<Fragment>
			<section className="account-section">
				<img alt="account" />
				<Icon name="camera" color="black" size={100} />
			</section>
			<section className="account-section">
				<form className="account-form">
					<div className="account-controls">
						<div className="account-control">
							<label>First Name</label>
							<p className="account__paragraph">
								{user.firstName}
							</p>
							<input
								className={`auth__input ${firstNameStyle}`}
								type="text"
								value={enteredFirstName}
								onChange={enteredFirstNameHandler}
							/>
						</div>

						<div className="account-control">
							<label>Last Name</label>
							<p className="account__paragraph">
								{user.firstName}
							</p>
							<input
								className={`auth__input ${lastNameStyle}`}
								type="text"
								value={enteredLastName}
								onChange={enteredLastNameHandler}
							/>
						</div>
						<div className="account-control">
							<label>Email</label>
							<p className="account__paragraph">
								{user.firstName}
							</p>
							<input
								className={`auth__input ${emailStyle}`}
								type="text"
								value={enteredEmail}
								onChange={enteredEmailHandler}
							/>
						</div>
					</div>
					<div className="button-wrapper">
						<button
							className="btn-white auth-btn-position"
							onClick={switchHandler}
						>
							{update
								? 'Update information'
								: 'Confirm the update'}
						</button>
					</div>
				</form>
			</section>
			<div className="img-container"></div>
		</Fragment>
	);
};

export default Account;
