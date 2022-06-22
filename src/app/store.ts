import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import bookReducer from './redicers/bookSlice';

export const store = configureStore({
  reducer: {
    bookReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;