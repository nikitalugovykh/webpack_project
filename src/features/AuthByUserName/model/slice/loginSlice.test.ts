import { type DeepPartial } from '@reduxjs/toolkit'
import { loginActions, loginReducer } from './loginSlice'
import { type LoginScheme } from '../types/loginScheme'
import { loginByUserNameThunk } from 'features/AuthByUserName/model/services/loginByUserNameThunk'

describe('Login Slice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginScheme> = {
            username: 'nik'
        }
        expect(loginReducer(state as LoginScheme, loginActions.setUsername('nik'))).toEqual(
            { username: 'nik' })
    })

    test('test set password', () => {
        const state: DeepPartial<LoginScheme> = {
            password: '123123'
        }
        expect(loginReducer(state as LoginScheme, loginActions.setPassword('123123'))).toEqual(
            { password: '123123' })
    })

    test('test set isLoading', () => {
        const state: DeepPartial<LoginScheme> = {
            isLoading: false
        }
        expect(loginReducer(state as LoginScheme, loginByUserNameThunk.pending)).toEqual(
            { isLoading: true, error: undefined })
    })
})
