import React, { useState } from 'react';

import Form from '../../UI/Form';
import { updateUserEmail } from '../../../controllers/authController';
import userFields from '../../../inputFields/userFields';

const AccountSettingsEmail = (props) => {
	const updateEmailFields = userFields.filter((el) =>
		['passwordCurrent', 'email'].includes(el.field)
	);

	const [updatedEmail, setUpdatedEmail] = useState({});

	const updateEmail = (data) => {
		updatedEmail[data.key] = data.value;
		setUpdatedEmail((prevState) => {
			return { ...prevState, ...updatedEmail };
		});
	};
	return (
		<Form
			className={props.className}
			addData={updateEmail}
			submit={updateUserEmail}
			submitData={updatedEmail}
			fields={updateEmailFields}
			btn='Update Email'
		/>
	);
};

export default AccountSettingsEmail;
