import { type StoryFn } from '@storybook/react'
import { StoreProvider } from 'app/providers/StoreProvider'
import { type StateScheme } from 'app/store'

type RouteDecoratorType = (StoryComponent: StoryFn) => JSX.Element

export const StoreDecorator: RouteDecoratorType = (StoryComponent: StoryFn) => {
    return (
        <StoreProvider initialState={{} as StateScheme}>
            <StoryComponent/>
        </StoreProvider>
    )
}
