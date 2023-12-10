import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit'
import { type EnhancedStore } from '@reduxjs/toolkit/src/configureStore'
import { type StateScheme } from './types/StateScheme'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUserName'

export function createReduxStore (initialStore?: StateScheme): EnhancedStore {
    const rootReducer: ReducersMapObject<StateScheme> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer
    }

    return configureStore<StateScheme>({
        reducer: rootReducer,
        preloadedState: initialStore,
        devTools: __IS_DEV__
    })
}
