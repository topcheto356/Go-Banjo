import React, { Fragment } from 'react';
import Input from '../UI/Input';

import { register } from '../../controllers/authController.js';
import userFields from '../../controllers/inputFields/userFields';

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
					{userFields.map((userField) => {
						/*
							Get this
							{
								name: Label name,
								type: input type,
								validate: Validator,
								errMessage: Error message,
								field: field name,
							}

							Add this 
							{
								className: 'create-house',
								onSaveData: addData
							}
						*/
						userField['className'] = 'auth';
						userField['onSaveData'] = addData;

						return (
							<Input
								key={userField.field}
								validate={userField.validate}
								name={userField.name}
								className={userField.className}
								type={userField.type}
								errMessage={userField.errMessage}
								onSaveData={userField.onSaveData}
								field={userField.field}
								enteredPassword={user}
							/>
						);
					})}
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
