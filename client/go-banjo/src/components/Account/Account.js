import React, { useState } from 'react';

import Form from '../UI/Form';

import { register } from '../../controllers/authController.js';
import userFields from '../../controllers/inputFields/userFields';

const Account = () => {
	const [user, setUser] = useState({});

	const addData = (data) => {
		user[data.key] = data.value;

		setUser((prevState) => {
			return { ...prevState, ...user };
		});
	};

	return (
		<main className='account'>
			<div className='account-section'>
				<img src='../img/banjo.jpg' alt='pen' />
			</div>
			<div className='account-section'>
				<Form
					className='account-section-acc'
					addData={addData}
					submit={register}
					submitData={user}
					fields={userFields}
					btn='Update Information'
				/>
			</div>
		</main>
	);
};

export default Account;
