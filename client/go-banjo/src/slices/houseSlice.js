import { createSlice } from '@reduxjs/toolkit';

export const houseSlice = createSlice({
    name: 'house',
    initialState: {
        houses: [],
        house: null,
        loading: false,
    },
    reducers: {
        addHouse: (state, { type, payload }) => {
            console.log(payload.data);

            return {
                ...state,
                houses: [...state.houses, payload.data],
                loading: false,
            };
        },
});

export const { addHouse, loadAllHouses } = houseSlice.actions;

export default houseSlice.reducer;
