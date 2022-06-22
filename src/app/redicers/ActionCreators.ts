import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBook } from "../models/IBook";

const APIKEY = process.env.REACT_APP_API_KEY

export const fetchBooks = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IBook[]>(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${APIKEY}&maxResults=30`)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue("Не удалось загрузить книги")
        }
    }
)