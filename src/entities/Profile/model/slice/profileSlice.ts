import { createSlice } from '@reduxjs/toolkit'
import { type ProfileScheme } from '../types/profile'

const initialState: ProfileScheme = {
    isLoading: false,
    readonly: false,
    error: undefined,
    data: undefined
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
