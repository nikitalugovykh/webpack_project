export { Counter } from './ui/Counter'
export type { CounterSchema } from './model/tyles/counterSchema'
export { counterActions, counterReducer } from './model/slice/counterSlice'
export { getCounterSelector } from 'entities/Counter/model/selectors/getCounter/getCounterSelector'
export { getCounterValueSelector } from './model/selectors/getCounterValueSelector/getCounterValueSelector'