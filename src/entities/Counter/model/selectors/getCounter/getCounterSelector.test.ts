import { getCounterSelector } from './getCounterSelector'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateScheme } from 'app/store'

describe('getCounter', () => {
    it('should return counterValue', () => {
        const state: DeepPartial<StateScheme> = {
            counter: {
                value: 10
            }
        }
        expect(getCounterSelector(state as StateScheme)).toEqual({ value: 10 })
    })
})
