import { type StateScheme } from 'app/store'
import { getCounterValueSelector } from './getCounterValueSelector'

describe('getCounterValueSelector.test', () => {
    it('should return counter value', () => {
        const state: DeepPartial<StateScheme> = {
            counter: {
                value: 10
            }
        }
        expect(getCounterValueSelector(state as StateScheme)).toEqual(10)
    })
})
