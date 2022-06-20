import axios from 'axios';
import catchAsync from '../utils/catchAsync';

export const login = async (loginData) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify(loginData);

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

export const register = async (registerData) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const body = JSON.stringify(registerData);

	try {
		const res = await axios.post(
			'http://localhost:8000/api/users/signup',
			body,
			config
		);
		console.log(res.data);
	} catch (err) {
		console.log(3);
	}
};
