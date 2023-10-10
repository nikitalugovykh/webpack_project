import { counterReducer, counterActions } from './counterSlice'
import { type CounterSchema } from '../tyles/counterSchema'

describe('counterSlice.test', () => {
    it('should decrement value', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 })
    })
    it('should increment value', () => {
        const state: CounterSchema = {
            value: 10
        }
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 })
    })

    it('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 })
    })
})
