import axios from 'axios';
import catchAsync from '../utils/catchAsync';
import store from '../store.js';
import { authSuccess, logout } from '../slices/authSlice.js';
import setAuthToken from '../slices/setAuthToken.js';

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

        console.log(res);

        store.dispatch(authSuccess(res.data));
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

        store.dispatch(authSuccess(res.data));
    } catch (err) {
        console.log(3);
    }
};

export const loadUser = async () => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('http://localhost:8000/api/users/getUser');

        const data = {
            data: { user: res.data._doc },
            token: res.data.token,
        };

        store.dispatch(authSuccess(data));
    } catch (err) {
        store.dispatch(logout());

        console.log(err);
    }
};
