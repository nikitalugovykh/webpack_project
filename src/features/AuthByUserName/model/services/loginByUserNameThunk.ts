import { createAsyncThunk } from '@reduxjs/toolkit'

import { type User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'
import { type ThunkConfig } from 'app/store'

interface LoginByUserNameProps {
    username: string
    password: string
}

// enum LoginErrors {
//     INCORRECT_DATA = 'INCORRECT_DATA',
//     SERVER_ERROR = 'SERVER_ERROR'
// }

export const loginByUserNameThunk = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
    'login/loginByUserName',
    async (authData, thunkAPI) => {
        const { dispatch, rejectWithValue, extra } = thunkAPI
        try {
            const response = await extra.api.post('/login', authData)

            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))

            thunkAPI.extra.navigate?.('/profile')
            return response.data
        } catch (e) {
            return rejectWithValue('Error')
        }
    }
)
