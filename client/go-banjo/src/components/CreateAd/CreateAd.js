import React, { Fragment, useState } from 'react';

import houseFields from '../../controllers/inputFields/houseFields';
import { createHouse } from '../../controllers/housesController';
import Form from '../UI/Form';

const CreateAd = () => {
	const [house, setHouse] = useState({});

	const addData = (data) => {
		if (data.key === 'imageCover') {
			house[data.key] = data.value[0];
		} else if (data.key === 'images') {
			const files = [];
			data.value.forEach((file) => files.push(file));
			house[data.key] = files;
		} else {
			house[data.key] = data.value;
		}

		setHouse((prevState) => {
			return { ...prevState, ...house };
		});
	};

	return (
		<Fragment>
			<section className='create-ad'>
				<Form
					className='create-house'
					addData={addData}
					submit={createHouse}
					submitData={house}
					fields={houseFields}
					btn='Create Ad'
				/>
				<div className='img-container'></div>
			</section>
		</Fragment>
	);
};

export default CreateAd;
