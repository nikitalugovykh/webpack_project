import { getLoginLoading } from './getLoginLoading'
import { type StateScheme } from 'app/store'

describe('getLoginLoading selector', () => {
    it('should return true when is Loading = true', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginLoading(state as StateScheme)).toEqual(true)
    })

    it('should return false when is Loading = false', () => {
        const state: DeepPartial<StateScheme> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginLoading(state as StateScheme)).toEqual(false)
    })
})
