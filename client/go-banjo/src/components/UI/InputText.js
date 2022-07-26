import React, { Fragment, useState } from 'react';

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
		const data = event.target.value;

		if (props.validate) {
			const { style } = props.validate(event, props.enteredPassword);
			setStyle(style);
		}

		saveData({ key: props.field, value: data });

		setEnteredData(data);
	};

	return (
		<Fragment>
			<div className={`${props.className}__control`}>
				<label className={`${props.className}__label`}>{props.name}</label>
				<input
					className={`${props.className}__input ${props.className}__input-${style}`}
					type={props.type}
					value={enteredData}
					onChange={enteredDataHandler}
				/>
			</div>
			{style === 'invalid' ? (
				<div className={`${props.className}__message`}>{props.errMessage}</div>
			) : (
				''
			)}
		</Fragment>
	);
};

export default InputText;
