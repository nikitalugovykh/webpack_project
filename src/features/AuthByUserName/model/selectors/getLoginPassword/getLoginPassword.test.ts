import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/store'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword selector', () => {
    test('should return typed password', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                password: '123123'
            }
        }

        expect(getLoginPassword(state as StateScheme)).toEqual('123123')
    })

    test('should return empty string when password is empty', () => {
        const state: DeepPartial<StateScheme> = {}

        expect(getLoginPassword(state as StateScheme)).toEqual('')
    })
})
