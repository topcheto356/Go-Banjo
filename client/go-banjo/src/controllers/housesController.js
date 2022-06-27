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
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(house);

    try {
        const res = await axios.post(
            'http://localhost:8000/api/houses',
            body,
            config
        );

        console.log(res);

        store.dispatch(addHouse(res.data));
    } catch (err) {
        console.log(3);
    }
};

export const getAllHouses = async () => {
    try {
        const res = await axios.get('http://localhost:8000/api/houses');

        console.log(res);

        store.dispatch(loadAllHouses(res.data));
    } catch (err) {
        console.log(err);
    }
};

export const deleteHouse = async (id) => {
    try {
        console.log(id);
        const res = await axios.delete(
            `http://localhost:8000/api/houses/${id}`
        );

        console.log(res);

        store.dispatch(removeHouse(id));
    } catch (err) {
        console.log(3);
    }
};

export const getHouse = async (id) => {
    try {
        console.log(id);
        const res = await axios.get(`http://localhost:8000/api/houses/${id}`);

        store.dispatch(loadHouse(res.data));
    } catch (err) {}
};
