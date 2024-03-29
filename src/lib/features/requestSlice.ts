'use client';

import { Request, UserRequests } from '@/dto/userRequests';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const loadUserData = (): UserRequests[] => {
	if (typeof window !== 'undefined') {
		const userData = localStorage.getItem('userData');
		if (userData) {
			return JSON.parse(userData);
		}
	}
	return [];
};

const initialState: UserRequests[] = loadUserData();

const requestSlice = createSlice({
	name: 'request',
	initialState,
	reducers: {
		createRequest: (
			state,
			action: PayloadAction<{ userId: string; request: Request }>
		) => {
			const { userId, request } = action.payload;
			const userIndex = state.findIndex((user) => user.userId === userId);
			if (userIndex !== -1) {
				state[userIndex].requests.push(request);
			} else {
				state.push({ userId, requests: [request] });
			}
			localStorage.setItem('userData', JSON.stringify(state));
		},
		deleteRequest: (
			state,
			action: PayloadAction<{ userId: string; requestId: string }>
		) => {
			const { userId, requestId } = action.payload;
			const userIndex = state.findIndex((user) => user.userId === userId);
			if (userIndex !== -1) {
				state[userIndex].requests = state[userIndex].requests.filter(
					(request) => request.id !== requestId
				);
				localStorage.setItem('userData', JSON.stringify(state));
			}
		},
		editRequest: (
			state,
			action: PayloadAction<{
				userId: string;
				requestId: string;
				newData: Partial<Request>;
			}>
		) => {
			const { userId, requestId, newData } = action.payload;
			const userIndex = state.findIndex((user) => user.userId === userId);
			if (userIndex !== -1) {
				const requestIndex = state[userIndex].requests.findIndex(
					(request) => request.id === requestId
				);
				if (requestIndex !== -1) {
					state[userIndex].requests[requestIndex] = {
						...state[userIndex].requests[requestIndex],
						...newData,
					};
					localStorage.setItem('userData', JSON.stringify(state));
				}
			}
		},
	},
});

export const { createRequest, deleteRequest, editRequest } =
	requestSlice.actions;

export default requestSlice.reducer;
