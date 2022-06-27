import React, { Fragment, useEffect, useState } from 'react';

const InputFile = (props) => {
	const [images, setImages] = useState([]);
	const [imageURLs, setImageURLs] = useState([]);

	const onImageChage = (event) => {
		setImages([...event.target.files]);
	};

	useEffect(() => {
		if (images.length < 1) return;
		const newImageUrls = [];
		images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
		setImageURLs(newImageUrls);
	}, [images]);

	return (
		<div className={`${props.className}__control`}>
			<label className={`${props.className}__label`}>{props.name}</label>
			<Fragment>
				{props.multiple ? (
					<input
						className={`${props.className}__input`}
						type={props.type}
						multiple
						accept={props.accept}
						onChange={onImageChage}
					/>
				) : (
					<input
						className={`${props.className}__input`}
						type={props.type}
						accept={props.accept}
						onChange={onImageChage}
					/>
				)}
			</Fragment>
			<div className={`${props.className}__img-container`}>
				{imageURLs.map((imageSrc) => (
					<img src={imageSrc} alt='yo' />
				))}
			</div>
		</div>
	);
};

export default InputFile;
