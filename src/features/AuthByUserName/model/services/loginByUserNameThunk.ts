import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import { type User, userActions } from 'entities/User'
import { LOCAL_STORAGE_USER_KEY } from 'shared/constants/localStorage'

interface LoginByUserNameProps {
    username: string
    password: string
}

// enum LoginErrors {
//     INCORRECT_DATA = 'INCORRECT_DATA',
//     SERVER_ERROR = 'SERVER_ERROR'
// }

export const loginByUserNameThunk = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string }>(
    'login/loginByUserName',
    async (authData, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error()
            }
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            return response.data
        } catch (e) {
            return rejectWithValue('Error')
        }
    }
)
