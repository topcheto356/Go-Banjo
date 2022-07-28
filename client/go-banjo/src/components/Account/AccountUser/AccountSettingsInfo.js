import React, { useState } from 'react';

import Form from '../../UI/Form';
import { updateUser } from '../../../controllers/authController';
import userFields from '../../../inputFields/userFields';

const AccountSettingsInfo = (props) => {
	const updateUserFields = userFields.filter((el) =>
		['firstName', 'lastName', 'photo'].includes(el.field)
	);

	const [updatedData, setUpdatedData] = useState({});

	const updateData = (data) => {
		if (data.key === 'photo') {
			updatedData[data.key] = data.value[0];
		} else updatedData[data.key] = data.value;

		setUpdatedData((prevState) => {
			return { ...prevState, ...updatedData };
		});
	};

	return (
		<Form
			className={props.className}
			addData={updateData}
			submit={updateUser}
			submitData={updatedData}
			fields={updateUserFields}
			btn='Update'
		/>
	);
};

export default AccountSettingsInfo;
