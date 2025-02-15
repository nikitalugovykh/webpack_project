import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Profile, type ProfileScheme } from '../types/profile'
import { fetchProfileDataThunk } from '../services/fetchProfileData/fetchProfileData'

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

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileDataThunk.pending, (state, action) => {
                state.isLoading = true
                state.error = undefined
            })
            .addCase(fetchProfileDataThunk.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchProfileDataThunk.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }

})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
