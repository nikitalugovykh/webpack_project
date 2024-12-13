import { type CounterSchema } from 'entities/Counter'
import { type UserScheme } from 'entities/User'
import { type LoginScheme } from 'features/AuthByUserName'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import type { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { type CombinedState } from 'redux'
import { type ProfileScheme } from 'entities/Profile'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'
import { type AxiosInstance } from 'axios'

export interface StateScheme {
    counter: CounterSchema
    user: UserScheme

    // async reducers
    loginForm?: LoginScheme
    profile?: ProfileScheme
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

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T>
{ rejectValue: T, extra: ThunkExtraArg }
