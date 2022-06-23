import React, { Fragment, useState } from 'react';
const Input = (props) => {
	const [enteredData, setEnteredData] = useState('');
	const [style, setStyle] = useState('valid');

	const saveData = (data) => {
		props.onSaveData(data);
	};

	const enteredDataHandler = (event) => {
		let result;

		if (!props.enteredPassword) {
			result = props.validate(event);
		} else result = props.validate(event, props.enteredPassword.password);

		const { style, data } = result;

		setStyle(style);

		saveData({ key: props.field, value: data });

		setEnteredData(data);
	};

	return (
		<Fragment>
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
		</Fragment>
	);
};

export default Input;
