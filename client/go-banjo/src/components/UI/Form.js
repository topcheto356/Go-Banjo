import React from 'react';

import InputText from './InputText';
import InputFile from './InputFile';

/*
	Wants

	className = className
	submit = controller method
	fields = needed fields 
	btn= btn name
	addData= parrent func to save data
	submitData= submited data 
		
 */

const Form = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();

		props.submit(props.submitData);
	};

	return (
		<form className={props.className} onSubmit={submitHandler}>
			<div className={`${props.className}__controls`}>
				{props.fields.map((field) => {
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
					field['className'] = props.className;
					field['onSaveData'] = props.addData;
					if (field.type !== 'file')
						return (
							<InputText
								key={field.field}
								validate={field.validate}
								name={field.name}
								className={field.className}
								type={field.type}
								errMessage={field.errMessage}
								onSaveData={field.onSaveData}
								field={field.field}
								enteredPassword={props.submitData.password}
							/>
						);
					else
						return (
							<InputFile
								key={field.field}
								name={field.name}
								className={field.className}
								type={field.type}
								onSaveData={field.onSaveData}
								field={field.field}
								accept={field.accept}
								multiple={field.multiple}
								validate={field.validate}
								errMessage={field.errMessage}
							/>
						);
				})}
			</div>
			<div className={`${props.className}__btn-submit`}>
				<button
					type='submit'
					className={`btn-square ${props.className}__btn-submit`}
				>
					{props.btn}
				</button>
			</div>
		</form>
	);
};

export default Form;
