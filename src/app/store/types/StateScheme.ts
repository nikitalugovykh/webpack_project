import { type CounterSchema } from 'entities/Counter'
import { type UserScheme } from 'entities/User'
import { type LoginScheme } from 'features/AuthByUserName'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import type { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'

export interface StateScheme {
    counter: CounterSchema
    user: UserScheme

    // async reducers
    loginForm?: LoginScheme
}
export type StateSchemaKey = keyof StateScheme

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateScheme>
    reduce: (state: StateScheme, action: AnyAction) => CombinedState<StateScheme>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore {
    reducerManager: IReducerManager
}
