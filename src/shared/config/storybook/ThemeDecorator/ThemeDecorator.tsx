import { type Theme } from 'shared/config/theme'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => {
    return function DecoratedStoryComponent (StoryComponent: StoryFn) {
        return (
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        )
    }
}
