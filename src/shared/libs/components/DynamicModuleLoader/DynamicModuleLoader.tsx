import { type FC, type ReactNode, useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import type { ReduxStoreWithManager } from 'app/store'
import { type StateSchemaKey } from 'app/store/types/StateScheme'
import { type Reducer } from '@reduxjs/toolkit'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

type ReducerListEntry = [StateSchemaKey, Reducer]

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({ children, removeAfterUnmount = true, reducers }) => {
    const store = useStore() as ReduxStoreWithManager

    const dispatch = useDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            dispatch({ type: `@INIT ${name} reducer` })
            store.reducerManager.add(name, reducer)
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
                    dispatch({ type: `@destroy ${name} reducer` })
                    store.reducerManager.remove(name)
                })
            }
        }

        // eslint-disable-next-line
    }, [])

    return (
        <>{children}</>
    )
}
