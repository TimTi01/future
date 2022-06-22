import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../models/IBook"
import { fetchBooks } from "./ActionCreators";

interface BookState {
    books: IBook[];
    isLoading: boolean;
    error: string;
}

const initialState: BookState = {
    books: [],
    isLoading: false,
    error: ''
}

export const bookSlice = createSlice({
    name: 'books',
    initialState, 
    reducers: {},
    extraReducers: {
        [fetchBooks.fulfilled.type]: (state, action: PayloadAction<IBook[]>) => {
            state.isLoading = false
            state.error = ''
            state.books = action.payload
        },
        [fetchBooks.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchBooks.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default bookSlice.reducer;