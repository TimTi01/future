import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { bookApi } from './services/BookService';

export const store = configureStore({
  reducer: {
    // [bookAPI.reducerPath]: bookAPI.reducer
    [bookApi.reducerPath]: bookApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bookApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;