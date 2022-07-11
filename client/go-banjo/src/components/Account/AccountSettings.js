import React, { Fragment, useState } from 'react';
import Form from '../UI/Form';

import { updateUser } from '../../controllers/authController';
import userFields from '../../controllers/inputFields/userFields';

const AccountSettings = (props) => {
	const user = props.user;

	const updateUserDataFields = userFields.filter((el) =>
		['firstName', 'lastName', 'email', 'photo'].includes(el.field)
	);
	const updateUserPasswordFields = userFields.filter((el) =>
		['password', 'passwordConfirm'].includes(el.field)
	);

	const [updatedData, setUpdatedData] = useState({});

	const addData = (data) => {
		console.log(data.key);
		if (data.key === 'photo') {
			updatedData[data.key] = data.value[0];
			console.log(updatedData[data.key]);
		} else updatedData[data.key] = data.value;

		setUpdatedData((prevState) => {
			return { ...prevState, ...updatedData };
		});
	};

	return (
		<Fragment>
			<Form
				className={props.className}
				addData={addData}
				submit={updateUser}
				submitData={updatedData}
				fields={updateUserDataFields}
				btn='Update'
			/>
		</Fragment>
	);
};

export default AccountSettings;
