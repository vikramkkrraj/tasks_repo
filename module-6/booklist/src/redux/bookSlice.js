import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks", async () => {
        const res = await axios.get(`https://openlibrary.org/search.json?q=react`);
        return res.data.docs;
    }
)

const bookSlice = createSlice({
    name : 'books',
    initialState : {
        books : [],
        selectedBook : null,
        laoding : false,
        error : null,
    },

    reducers : {
        setSelectedBook : (state, action) => {
            state.selectedBook = action.payload;
        }
    }
    ,
    extraReducers : (builder) => {
        builder 
            .addCase(fetchBooks.pending, (state) => {
                state.laoding = true;
            })
            .addCase(fetchBooks.fulfilled , (state,action) => {
                state.laoding = false;
                state.books = action.payload.sort((a,b) => a.title.localeCompare(b.title))
            })
            .addCase(fetchBooks.rejected, (state,action) => {
                state.laoding = false,
                state.error = action.error.message;
            })
    }

})

export const { selectedBook } = bookSlice.actions;
export default bookSlice.reducer