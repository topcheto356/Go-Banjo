import { createSlice } from '@reduxjs/toolkit';

export const houseSlice = createSlice({
	name: 'house',
	initialState: {
		houses: [
			{
				location: 'Tilted Towers',
				imageCover:
					'https://cdn.mos.cms.futurecdn.net/MNicN6WoB7NEAhrsgwnKgD.jpg',
				description: '1242345123',
				summary: 'bolesti',
				price: 231,
				maxGroupSize: 21,
				name: 'Kurjavata Kushta',
				images: [
					'https://cdn.mos.cms.futurecdn.net/MNicN6WoB7NEAhrsgwnKgD.jpg',
					'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/suburban-house-royalty-free-image-1584972559.jpg',
				],
				id: '34',
			},
		],
		house: null,
		loading: true,
	},
	reducers: {
		addHouse: (state, { type, payload }) => {
			return {
				...state,
				houses: [...state.houses, payload.data],
				loading: false,
			};
		},
		loadAllHouses: (state, { type, payload }) => {
			return {
				...state,
				houses: [...payload.data],
			};
		},

		loadHouse: (state, { type, payload }) => {
			return {
				...state,
				house: payload.data,
			};
		},
		removeHouse: (state, { type, payload }) => {
			return {
				...state,
				houses: [state.houses.filter((h) => h.id !== payload)],
			};
		},
	},
});

export const { addHouse, loadAllHouses, removeHouse, loadHouse } =
	houseSlice.actions;

export default houseSlice.reducer;
