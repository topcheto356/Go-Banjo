import React, { Fragment, useEffect, useState } from 'react';

const InputFile = (props) => {
	const [images, setImages] = useState([]);
	const [imageURLs, setImageURLs] = useState([]);
	const [style, setStyle] = useState('valid');

	const saveData = (data) => {
		props.onSaveData(data);
	};

	const onImageChage = (event) => {
		saveData({ key: props.field, value: [...event.target.files] });

		if (props.validate) {
			const { style } = props.validate(event);
			setStyle(style);
		}

		setImages([...event.target.files]);
	};

	useEffect(() => {
		if (images.length < 1) return;
		const newImageUrls = [];

		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));

		setImageURLs(newImageUrls);
	}, [images]);

	return (
		<div className={`${props.className}__control-images`}>
			<div className={`${props.className}__control-image`}>
				<label className={`${props.className}__label`}>{props.name}</label>
				<Fragment>
					{props.multiple ? (
						<Fragment>
							<input
								className={`${props.className}__inputFile`}
								type={props.type}
								multiple
								accept={props.accept}
								onChange={onImageChage}
							/>

							{style === 'invalid' ? (
								<div className={`${props.className}__message`}>
									{props.errMessage}
								</div>
							) : (
								''
							)}
						</Fragment>
					) : (
						<input
							className={`${props.className}__inputFile`}
							type={props.type}
							accept={props.accept}
							onChange={onImageChage}
						/>
					)}
				</Fragment>
			</div>
			<div className={`${props.className}__control-images__img-container`}>
				{imageURLs.map((imageSrc, index) => (
					<img key={index} src={imageSrc} alt='yo' />
				))}
			</div>
		</div>
	);
};

export default InputFile;
