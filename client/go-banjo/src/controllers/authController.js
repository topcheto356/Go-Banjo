import axios from 'axios';import catchAsync from '../utils/catchAsync';

export const login = async (formData) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify(formData);

	try {
		const res = await axios.post(
			'http://localhost:8000/api/users/login',
			body,
			config
		);
		console.log(res.data);
	} catch (err) {
		console.log(3);
	}
};
