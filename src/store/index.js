import { configureStore } from "@reduxjs/toolkit";
import { goodsReducer } from "./slices/goodsSlice";



export const store = configureStore({
    reducer: {
        goods: goodsReducer
    }
})