import { createSlice } from '@reduxjs/toolkit';
import setAuthToken from './setAuthToken';

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		isAuthenticated: true,
		loading: true,
	},
	reducers: {
		authSuccess: (state, { type, payload }) => {
			const { status, token, data } = payload;

			localStorage.setItem('token', token);
			setAuthToken(localStorage.token);

			return {
				...data,
				isAuthenticated: true,
				loading: false,
			};
		},
		authUpdate: (state, { type, payload }) => {
			const { status, data } = payload;

			return {
				...data,
				isAuthenticated: true,
				loading: false,
			};
		},
		logout: (state) => {
			localStorage.removeItem('token');

			return {
				user: null,
				isAuthenticated: true,
				loading: false,
			};
		},
	},
});

export const { authSuccess, logout, authUpdate } = authSlice.actions;

export default authSlice.reducer;
