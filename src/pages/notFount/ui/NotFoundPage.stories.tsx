import type { Meta, StoryObj } from '@storybook/react'

import { NotFoundPage } from './NotFoundPage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

const meta = {
    title: 'pages/ui/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs']

} satisfies Meta<typeof NotFoundPage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.Dark)]
}
