import { getLoginError } from './getLoginError'
import { type StateScheme } from 'app/store'

describe('getLoginError selector test', () => {
    test('should return the error', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                error: 'error'
            }
        }
        expect(getLoginError(state as StateScheme)).toEqual('error')
    })

    test('should return undefined', () => {
        const state: DeepPartial<StateScheme> = {}
        expect(getLoginError(state as StateScheme)).toEqual('')
    })
})
