import { configureStore } from '@reduxjs/toolkit';
import zenReducer from './ZenSlice';

export const store = configureStore({
  reducer: {
   zen: zenReducer
  },
})