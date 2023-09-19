import type { Meta, StoryObj } from '@storybook/react'

import AboutPage from './AboutPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

const meta = {
    title: 'pages/ui/AboutPage',
    component: AboutPage,
    tags: ['autodocs']

} satisfies Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.Dark)]
}
