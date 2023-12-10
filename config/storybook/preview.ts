import type { Preview } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import 'app/styles/index.scss'
import './storybook.scss'
import { Theme } from 'shared/config/theme'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    decorators: [
        ThemeDecorator(Theme.Light),
        RouteDecorator
    ]
}

export default preview
