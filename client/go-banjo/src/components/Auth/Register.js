import React, { Fragment, useState } from 'react';

import { register } from '../../controllers/authController.js';
import userFields from '../../controllers/inputFields/userFields';
import Form from '../UI/Form';

const Register = () => {
	const [user, setUser] = useState({
		password: '',
	});

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
				fields={userFields}
			/>
			<div className='img-container'></div>
		</Fragment>
	);
};

export default Register;
