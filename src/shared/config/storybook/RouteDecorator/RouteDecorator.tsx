import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

type RouteDecoratorType = (StoryComponent: StoryFn) => JSX.Element

export const RouteDecorator: RouteDecoratorType = (StoryComponent: StoryFn) => {
    return (
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
    )
}
