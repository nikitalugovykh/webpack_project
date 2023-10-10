import { type StateScheme } from 'app/store'
import { type CounterSchema } from 'entities/Counter'

export const getCounterSelector = (state: StateScheme): CounterSchema => state.counter
