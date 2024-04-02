'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import requestSlice from './features/requestSlice';

const rootReducer = combineReducers({
	request: requestSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
