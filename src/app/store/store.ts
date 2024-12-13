import { type AnyAction, configureStore, type ReducersMapObject, type ThunkDispatch } from '@reduxjs/toolkit'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import { type StateScheme } from './types/StateScheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './config/reducerManager'
import { $api } from 'shared/api/api'
import type { To } from '@remix-run/router'
import type { NavigateOptions } from 'react-router/dist/lib/context'

export function createReduxStore (initialStore?: StateScheme, asyncReducers?: ReducersMapObject<StateScheme>, navigate?: (to: To, options?: NavigateOptions) => void): EnhancedStore {
    const rootReducer: ReducersMapObject<StateScheme> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialStore,
        devTools: __IS_DEV__,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export type AppState = ReturnType<typeof createReduxStore>['getState']

export type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>
