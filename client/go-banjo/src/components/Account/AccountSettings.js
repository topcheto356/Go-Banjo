import React, { Fragment, useState } from 'react';
import Form from '../UI/Form';

import {
	updateUser,
	updateUserPassword,
	updateUserEmail,
} from '../../controllers/authController';
import userFields from '../../inputFields/userFields';

const AccountSettings = (props) => {
	const updateUserDataFields = userFields.filter((el) =>
		['firstName', 'lastName', 'photo'].includes(el.field)
	);
	const updateUserPasswordFields = userFields.filter((el) =>
		['password', 'passwordConfirm'].includes(el.field)
	);
	const updateEmailField = userFields.filter((el) =>
		['email'].includes(el.field)
	);

	const [updatedData, setUpdatedData] = useState({});
	const [updatedPassword, setUpdatedPassword] = useState({});
	const [updatedEmail, setUpdatedEmail] = useState({});

	const updateData = (data) => {
		if (data.key === 'photo') {
			updatedData[data.key] = data.value[0];
			console.log(updatedData[data.key]);
		} else updatedData[data.key] = data.value;

		setUpdatedData((prevState) => {
			return { ...prevState, ...updatedData };
		});
	};

	const updatePassword = (data) => {
		updatedPassword[data.key] = data.value;

		setUpdatedPassword((prevState) => {
			return { ...prevState, ...updatedPassword };
		});
	};

	const updateEmail = (data) => {
		updatedEmail[data.key] = data.value;
		setUpdatedEmail((prevState) => {
			return { ...prevState, ...updatedEmail };
		});
	};
	return (
		<Fragment>
			<p>Done</p>
			<Form
				className={props.className}
				addData={updateData}
				submit={updateUser}
				submitData={updatedData}
				fields={updateUserDataFields}
				btn='Update'
			/>
			<p>Not Done</p>
			<Form
				className={props.className}
				addData={updateEmail}
				submit={updateUserEmail}
				submitData={updatedEmail}
				fields={updateEmailField}
				btn='Update Email'
			/>
			<p> Not Done</p>
			<Form
				className={props.className}
				addData={updatePassword}
				submit={updateUserPassword}
				submitData={updatedPassword}
				fields={updateUserPasswordFields}
				btn='Update Password'
			/>
		</Fragment>
	);
};

export default AccountSettings;
