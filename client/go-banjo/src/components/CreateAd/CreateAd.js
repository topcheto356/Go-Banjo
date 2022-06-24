import React, { Fragment, useState } from 'react';

import houseFields from '../../controllers/inputFields/houseFields';
import { createHouse } from '../../controllers/housesController';
import Form from '../UI/Form';

const CreateAd = () => {
	const [house, setHouse] = useState({});

	const addData = (data) => {
		house[data.key] = data.value;

		setHouse((prevState) => {
			return { ...prevState, ...house };
		});
	};

	return (
		<Fragment>
			<Form
				className='auth'
				addData={addData}
				submit={createHouse}
				submitData={house}
				fields={houseFields}
				btn='Create Ad'
			/>
			<div className='img-container'></div>
		</Fragment>
	);
};

export default CreateAd;
