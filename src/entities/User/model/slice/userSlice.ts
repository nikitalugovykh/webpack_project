import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserScheme } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

const initialState: UserScheme = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
            if (user) {
                state.authData = JSON.parse(user)
            }
        },
        logout: (state) => {
            state.authData = null
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
        }
    }
})

export const { actions: userActions } = userSlice

export const { reducer: userReducer } = userSlice
