import type { Meta, StoryObj } from '@storybook/react'

import HomePage from './HomePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

const meta = {
    title: 'pages/ui/HomePage',
    component: HomePage,
    tags: ['autodocs']

} satisfies Meta<typeof HomePage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.Dark)]
}
