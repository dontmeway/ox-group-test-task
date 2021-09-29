import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getToken = createAsyncThunk(
    'goods/getToken',
    async({userName, password, dispatch, page, size}, { rejectWithValue }) => {
        try {
            const response = await axios.request({
                url: `https://face.ox-sys.com/security/auth_check`,
                method: "POST",
                data: `_username=${userName}&_password=${password}&_subdomain=face`,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            if (response.status !== 200) {
                dispatch(getToken({userName, password, dispatch, page, size}))
            }
            dispatch(getGoods({token: response.data.token, page, size}))
            sessionStorage.setItem("token", response.data.token)
            return response.data.token
        } 
        catch(err) {
            throw rejectWithValue(err.message)
        }
    }
)

export const getGoods = createAsyncThunk(
    'goods/getGoods',
    async({token, page, size}, { dispatch, rejectWithValue }) => {
        try {
            const res = await axios.request({
                url: "https://face.ox-sys.com/variations",
                method: "POST",
                data: {
                    size: size || 30,
                    page: page,
                    stock: {
                        exist: true,
                        location: [
                            42
                        ]
                    }
                },
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            if (res.status !== 200) {
                dispatch(getGoods({token, page, size}))
                
            }
            return {goods: res.data, page, size}
        } catch(err) {
            return rejectWithValue(err.message)
        }
    }
)