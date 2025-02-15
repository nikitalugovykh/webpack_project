import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/store/StoreProvider'
import { type StateScheme } from 'app/store'
import { type ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/libs/components/DynamicModuleLoader'

type RouteDecoratorType = (state: DeepPartial<StateScheme>, asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => (StoryComponent: StoryFn) => JSX.Element

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer

}

// eslint-disable-next-line react/display-name
export const StoreDecorator: RouteDecoratorType = (state: DeepPartial<StateScheme>, asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
            <StoryComponent/>
        </StoreProvider>
    )
}
