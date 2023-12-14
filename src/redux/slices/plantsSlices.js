import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    plants: [],                                     //  Agregar más estados iniciales aquí!!!

};

export const plantsSlice = createSlice({
    name: "plants",
    initialState,
    reducers: {
        getPlants: (state, action) => {
            state.plants = action.payload;
        },                                             // Agregar más reducers aquí!!!

    },
});


export const { getPlants } = plantsSlice.actions;     // Agregar más actions aquí!!!
export default plantsSlice.reducer;