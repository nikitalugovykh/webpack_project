import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/store/types/StateScheme'
import { type Profile } from '../../types/profile'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileDataThunk = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { rejectWithValue, extra } = thunkAPI

        try {
            const response = await extra.api?.get<Profile>('/profile')

            console.log({ response })

            if (!response.data) {
                throw new Error()
            }
            return response.data
        } catch (e) {
            console.log('error', e)
            return rejectWithValue('Error')
        }
    }
)
