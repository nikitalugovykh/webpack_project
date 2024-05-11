import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/store/StoreProvider'
import { type StateScheme } from 'app/store'
import { type DeepPartial, type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'

type RouteDecoratorType = (state: DeepPartial<StateScheme>, asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => (StoryComponent: StoryFn) => JSX.Element

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
    loginForm: loginReducer

}

// eslint-disable-next-line react/display-name
export const StoreDecorator: RouteDecoratorType = (state: DeepPartial<StateScheme>, asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
}
