import React, { useState } from 'react';

/*
	Wants

	key = Field Name
	validate = Validator
	name = Label Name
	className = className
	type = Input type
	errMessage = Err message 
	onSaveData = parrent func to save data
	field = Field Name
	enteredPassword = submitData.password (used only for password validation)

 */

const InputText = (props) => {
	const [enteredData, setEnteredData] = useState('');
	const [style, setStyle] = useState('valid');

	const saveData = (data) => {
		props.onSaveData(data);
	};
	const enteredDataHandler = (event) => {
		//enteredPassword is for password validation
		const { style, data } = props.validate(event, props.enteredPassword);

		setStyle(style);

		saveData({ key: props.field, value: data });

		setEnteredData(data);
	};

	return (
		<div className={`${props.className}__control`}>
			<label className={`${props.className}__label`}>{props.name}</label>
			<input
				className={`${props.className}__input ${style}`}
				type={props.type}
				value={enteredData}
				onChange={enteredDataHandler}
			/>
			{style === 'invalid' ? (
				<p className={`${props.className}__message`}>{props.errMessage}</p>
			) : (
				''
			)}
		</div>
	);
};

export default InputText;
