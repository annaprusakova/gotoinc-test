'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orders: JSON.parse(localStorage.getItem('orders') as string) || [],
	deliveries: JSON.parse(localStorage.getItem('deliveries') as string) || [],
};

const requestSlice = createSlice({
	name: 'request',
	initialState,
	reducers: {
		createOrderRequest: (state, action) => {
			state.orders.push(action.payload);
			localStorage.setItem('orders', JSON.stringify(state.orders));
		},
		createDeliveryRequest: (state, action) => {
			state.deliveries.push(action.payload);
			localStorage.setItem('deliveries', JSON.stringify(state.deliveries));
		},
		deleteRequest: (state, action) => {
			const { type, index } = action.payload;
			if (type === 'order') {
				state.orders.splice(index, 1);
				localStorage.setItem('orders', JSON.stringify(state.orders));
			} else if (type === 'delivery') {
				state.deliveries.splice(index, 1);
				localStorage.setItem('deliveries', JSON.stringify(state.deliveries));
			}
		},
		editRequest: (state, action) => {
			const { type, index, newData } = action.payload;
			if (type === 'order') {
				state.orders[index] = newData;
				localStorage.setItem('orders', JSON.stringify(state.orders));
			} else if (type === 'delivery') {
				state.deliveries[index] = newData;
				localStorage.setItem('deliveries', JSON.stringify(state.deliveries));
			}
		},
	},
});

export const {
	createOrderRequest,
	createDeliveryRequest,
	deleteRequest,
	editRequest,
} = requestSlice.actions;

export default requestSlice.reducer;
