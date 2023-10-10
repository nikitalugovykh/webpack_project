import { configureStore } from '@reduxjs/toolkit'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import { type StateScheme } from './types/StateScheme'
import { counterReducer } from 'entities/Counter'

export function createReduxStore (initialStore?: StateScheme): EnhancedStore {
    return configureStore<StateScheme>({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initialStore,
        devTools: __IS_DEV__
    })
}
