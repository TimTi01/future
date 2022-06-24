import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { Response } from "../models/IBook"

interface Params {
    search: string,
    type: string,
    sort: string,
    maxResults: number
}

export const bookApi = createApi({
    reducerPath: 'books',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.googleapis.com/books/v1/volumes'}),
    endpoints: (build) => ({
        fetchAllBooks: build.query<Response, Params>({
            query: ({search, type, sort, maxResults}) => ({
                url: '',
                params: {
                    q: search,
                    printType: type,
                    apiKey: process.env.REACT_APP_API_KEY,
                    orderBy: sort,
                    maxResults: maxResults
                }
            }),
        })
    })
})

export const { useFetchAllBooksQuery } = bookApi