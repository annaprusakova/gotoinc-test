'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/requestSlice';

const rootReducer = combineReducers({
	request: counterSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
