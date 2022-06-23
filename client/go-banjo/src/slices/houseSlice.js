import { createSlice } from '@reduxjs/toolkit';

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        houses: null,
        house: null,
        loading: false,
    },
    reducers: {},
});

export const {} = houseSlice.actions;

export default houseSlice.reducer;
