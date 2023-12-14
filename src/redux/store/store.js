import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from '../slices/plantsSlices' ;


const store = configureStore({
    reducer: {
        plants: plantsReducer,          // Agregar más reducers aquí!!!
        
    },
});

export default store;