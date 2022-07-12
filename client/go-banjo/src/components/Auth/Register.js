import React, { Fragment, useState } from 'react';

import { register } from '../../controllers/authController.js';
import userFields from '../../inputFields/userFields';
import Form from '../UI/Form';

const Register = () => {
	const neededFields = [
		'firstName',
		'lastName',
		'email',
		'password',
		'passwordConfirm',
	];

	const filteredFields = userFields.filter((el) =>
		neededFields.includes(el.field)
	);

	console.log(filteredFields);

	const [user, setUser] = useState({});

	const addData = (data) => {
		user[data.key] = data.value;

		setUser((prevState) => {
			return { ...prevState, ...user };
		});
	};

	return (
		<Fragment>
			<Form
				className='auth'
				addData={addData}
				submit={register}
				submitData={user}
				fields={filteredFields}
				btn='Register'
			/>
			<div className='img-container'></div>
		</Fragment>
	);
};

export default Register;
