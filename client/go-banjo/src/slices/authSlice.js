import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        user: null,
        isAuthenticated: true,
        loading: false,
    },
    reducers: {
        authSuccess: (state, { type, payload }) => {
            const { status, token, data } = payload;
            console.log(status, data);

            localStorage.setItem('token', token);
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

export const { authSuccess, logout } = counterSlice.actions;

export default counterSlice.reducer;
