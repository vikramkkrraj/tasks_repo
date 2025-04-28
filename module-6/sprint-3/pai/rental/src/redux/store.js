import { configureStore } from "@reduxjs/toolkit"
import rentalReducer from "./rentalSlice.js";

export const store = configureStore({
    reducer : {
        rentals : rentalReducer
    }
})