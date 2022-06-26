import React, { Fragment, useState } from 'react';
import { updateUser } from '../../controllers/authController';

const UpdateUser = () => {
	const [user, setUser] = useState('');

	const handler = (event) => {
		setUser(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		updateUser(user);
	};

	return (
		<Fragment>
			<form onSubmit={submitHandler}>
				<label>First name</label>
				<input type='text' value={user} onChange={handler} />
				<button type='submit' className='btn-square'></button>
			</form>
		</Fragment>
	);
};

export default UpdateUser;
