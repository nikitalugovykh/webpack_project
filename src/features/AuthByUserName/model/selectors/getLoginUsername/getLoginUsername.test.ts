import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/store'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginPassword selector', () => {
    test('should return typed username', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                username: 'nik'
            }
        }

        expect(getLoginUsername(state as StateScheme)).toEqual('nik')
    })

    test('should return empty string when username is empty', () => {
        const state: DeepPartial<StateScheme> = {}

        expect(getLoginUsername(state as StateScheme)).toEqual('')
    })
})
