import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type StateScheme } from 'app/store'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateScheme>
    asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState, asyncReducers }) => {
    const store = createReduxStore(initialState as StateScheme, asyncReducers as ReducersMapObject<StateScheme>)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
