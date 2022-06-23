import React, { Fragment } from 'react';
import Input from '../UI/Input';

import houseFields from '../../controllers/inputFields/houseFields';
import { createHouse } from '../../controllers/housesController';

const CreateAd = () => {
	const house = {};

	const addData = (data) => {
		house[data.key] = data.value;
	};

	const submitHandler = (event) => {
		event.preventDefault();
		createHouse(house);
	};

	return (
		<Fragment>
			<form className='create-house' onSubmit={submitHandler}>
				<div className='create-house__controls'>
					{houseFields.map((houseField) => {
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
						houseField['className'] = 'create-house';
						houseField['onSaveData'] = addData;

						return (
							<Input
								key={houseField.field}
								validate={houseField.validate}
								name={houseField.name}
								className={houseField.className}
								type={houseField.type}
								errMessage={houseField.errMessage}
								onSaveData={houseField.onSaveData}
								field={houseField.field}
							/>
						);
					})}
				</div>
				<div type='submit'>
					<button className='btn-square'>Create Ad</button>
				</div>
			</form>
			<div className='img-container'></div>
		</Fragment>
	);
};

export default CreateAd;
