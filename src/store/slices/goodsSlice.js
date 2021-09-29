import { createSlice } from "@reduxjs/toolkit";
import { getGoods, getToken } from "../../API/Auth";

const initialState = {
    goods: [],
    isLoading: false,
    error: null,
    totalPages: 0,
    token: '',
    isAuth: false,
    config: {
        page: 1,
        size: 10
    }
}


export const goodsSlice = createSlice({
    name: "goods", 
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload
        }

    },
    extraReducers: {
        [getToken.pending]: (state) => {
            state.error = null
        },
        [getToken.fulfilled]: (state, { payload }) => {
            state.token = payload
            state.isAuth = true
        },
        [getToken.rejected]: (state, { payload }) => {
            state.error = payload
        },
        [getGoods.pending]: (state) => {
            state.isLoading = true
            state.isAuth = true
        },
        [getGoods.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            console.log(payload);
            state.goods = [...payload?.goods.items]
            state.totalPages = Math.ceil(payload.total_count / 30)
            state.config = {
                ...state.config,
                page: payload.page,
                size: payload.size
            }
            
        },
        [getGoods.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload
        }
    }
})


export const goodsReducer = goodsSlice.reducer 
export const { setToken } = goodsSlice.actions