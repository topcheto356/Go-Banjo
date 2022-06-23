import axios from 'axios';
import catchAsync from '../utils/catchAsync';
import store from '../store.js';
import { addHouse, loadAllHouses } from '../slices/houseSlice.js';

export const createHouse = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const house = {
        location: '12431241',
        imageCover: 'dsadsadsa',
        description: 'dsadsadsa',
        summary: 'gosho kushta',
        price: 231,
        maxGroupSize: 21,
        name: 'Kushta11',
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

