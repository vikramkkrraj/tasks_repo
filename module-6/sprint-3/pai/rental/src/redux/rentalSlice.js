import { createSlice,nanoid } from "@reduxjs/toolkit";

const rentalSlice = createSlice({
    name : 'rentals',
    initialState : [],
    reducers : {
        addRental : (state, action) => {
            state.push( {id : nanoid(), ...action.payload});
        },

        editRental : (state,action) => {
            console.log(action.payload)
            const rental = state.find(item => item.id == action.payload.id)

            if(rental) {
                rental.customerName = action.payload.update.customerName;
                rental.carType = action.payload.update.carType;
                rental.rentalDays = action.payload.update.rentalDays;
            }
        }
    }
})

export const {addRental, editRental} = rentalSlice.actions;
export default rentalSlice.reducer;