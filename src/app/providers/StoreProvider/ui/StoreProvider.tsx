import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore, type StateScheme } from 'app/store'
import { type DeepPartial } from '@reduxjs/toolkit'

interface StoreProviderProps {
    children?: ReactNode
    initialState?: DeepPartial<StateScheme>
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState as StateScheme)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
