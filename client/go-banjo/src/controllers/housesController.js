import axios from 'axios';
import catchAsync from '../utils/catchAsync';
import store from '../store.js';
import {
	addHouse,
	loadAllHouses,
	loadHouse,
	removeHouse,
} from '../slices/houseSlice.js';

export const createHouse = async (house) => {
	const formData = new FormData();

	for (const field in house) {
		if (field === 'images') {
			formData.append(field, 'kazah ne raboti!!!!');
		} else formData.append(field, house[field]);
	}

	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};

	try {
		const res = await axios.post(
			'http://localhost:8000/api/houses',
			formData,
			config
		);

		store.dispatch(addHouse(res.data));
	} catch (err) {
		console.log(err.response.data.message);
	}
};

export const getAllHouses = async () => {
	try {
		const res = await axios.get('http://localhost:8000/api/houses');

		store.dispatch(loadAllHouses(res.data));
	} catch (err) {
		console.log(err.response.data.message);
	}
};

export const deleteHouse = async (id) => {
	try {
		const res = await axios.delete(`http://localhost:8000/api/houses/${id}`);

		store.dispatch(removeHouse(id));
	} catch (err) {
		console.log(err.response.data.message);
	}
};

export const getHouse = async (id) => {
	try {
		const res = await axios.get(`http://localhost:8000/api/houses/${id}`);

		store.dispatch(loadHouse(res.data));
	} catch (err) {}
};
