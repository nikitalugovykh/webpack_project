import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type LoginScheme } from '../types/loginScheme'
import { loginByUserNameThunk } from '../services/loginByUserNameThunk'

const initialState: LoginScheme = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserNameThunk.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(loginByUserNameThunk.fulfilled, (state, action) => {
                state.isLoading = false
            })
            .addCase(loginByUserNameThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export const { actions: loginActions } = loginSlice

export const { reducer: loginReducer } = loginSlice
