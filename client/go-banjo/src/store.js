import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice.js';
import houseSlice from './slices/houseSlice.js';

export default configureStore({
    reducer: {
        auth: authSlice,
        house: houseSlice,
    },
});
