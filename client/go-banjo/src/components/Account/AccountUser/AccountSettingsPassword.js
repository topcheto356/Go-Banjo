import React, { useState } from 'react';

import Form from '../../UI/Form';
import { updateUserPassword } from '../../../controllers/authController';
import userFields from '../../../inputFields/userFields';

const AccountSettingsPassword = (props) => {
	const updateUserPasswordFields = userFields.filter((el) =>
		['passwordCurrent', 'password', 'passwordConfirm'].includes(el.field)
	);

	const [updatedPassword, setUpdatedPassword] = useState({});

	const updatePassword = (data) => {
		updatedPassword[data.key] = data.value;

		setUpdatedPassword((prevState) => {
			return { ...prevState, ...updatedPassword };
		});
	};

	return (
		<Form
			className={props.className}
			addData={updatePassword}
			submit={updateUserPassword}
			submitData={updatedPassword}
			fields={updateUserPasswordFields}
			btn='Update Password'
		/>
	);
};

export default AccountSettingsPassword;
