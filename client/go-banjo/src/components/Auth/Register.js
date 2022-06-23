import React, { Fragment } from 'react';
import { register } from '../../controllers/authController.js';

import Input from '../UI/Input';
import {
	validateEnteredName,
	validateEnteredPassword,
	validateEnteredConfirmPassword,
	validateEnteredEmail,
} from '../../controllers/validateData';
const Register = () => {
	const user = {};

	const addData = (data) => {
		user[data.key] = data.value;
	};
	const submitHandler = (event) => {
		event.preventDefault();
		register(user);
	};

	return (
		<Fragment>
			<form className='auth' onSubmit={submitHandler}>
				<div className='auth__controls'>
					<Input
						validate={validateEnteredName}
						name='First Name'
						className='auth'
						type='text'
						errMessage='First name must be less than 30 characters and only letters'
						onSaveData={addData}
						field={'firstName'}
					/>
					<Input
						validate={validateEnteredName}
						name='Last Name'
						className='auth'
						type='text'
						errMessage='Last name must be less than 30 characters and only letters'
						onSaveData={addData}
						field={'lastName'}
					/>
					<Input
						validate={validateEnteredEmail}
						name='Email'
						className='auth'
						type='text'
						errMessage='Enter valid email'
						onSaveData={addData}
						field={'email'}
					/>
					<Input
						validate={validateEnteredPassword}
						name={'Password'}
						className='auth'
						type='text'
						errMessage='A password must be minimum 8 characters'
						onSaveData={addData}
						field={'password'}
					/>
					<Input
						validate={validateEnteredConfirmPassword}
						name={'Confirm Password'}
						className='auth'
						type='text'
						errMessage='Passwords are NOT the same'
						onSaveData={addData}
						enteredPassword={user}
						field={'passwordConfirm'}
					/>
				</div>
				<div>
					<button type='submit' className='btn-square'>
						Register
					</button>
				</div>
			</form>
			<div className='img-container'></div>
		</Fragment>
	);
};

export default Register;
