import { type FC, type ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import type { ReduxStoreWithManager } from 'app/store'
import { type StateSchemaKey } from 'app/store/types/StateScheme'
import { type Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

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

    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@destroy ${name} reducer` })
                })
            }
        }

        // eslint-disable-next-line
    }, [])

    return (
        <>{children}</>
    )
}
