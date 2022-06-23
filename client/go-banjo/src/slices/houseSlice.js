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
        loadAllHouses: (state, { type, payload }) => {
            console.log(payload.data);

            return {
                ...state,
                houses: [...payload.data],
            };
        },
        removeHouse: (state, { type, payload }) => {
            console.log(payload);

            return {
                ...state,
                houses: [state.houses.filter((h) => h.id !== payload)],
            };
        },
    },
});

export const { addHouse, loadAllHouses } = houseSlice.actions;

export default houseSlice.reducer;
