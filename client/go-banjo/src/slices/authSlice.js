import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: true,
        loading: false,
    },
    reducers: {
        authSuccess: (state, { type, payload }) => {
            const { status, token, data } = payload;

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

export const { authSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
