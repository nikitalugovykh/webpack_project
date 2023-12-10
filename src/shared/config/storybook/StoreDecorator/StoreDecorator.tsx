import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/store'
import { type DeepPartial } from '@reduxjs/toolkit'

type RouteDecoratorType = (state: DeepPartial<StateScheme>) => (StoryComponent: StoryFn) => JSX.Element

// eslint-disable-next-line react/display-name
export const StoreDecorator: RouteDecoratorType = (state: DeepPartial<StateScheme>) => (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={state}>
            <StoryComponent/>
        </StoreProvider>
    )
}
