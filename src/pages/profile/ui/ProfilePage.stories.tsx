import type { Meta, StoryObj } from '@storybook/react'

import ProfilePage from './ProfilePage'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'pages/ui/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs']

} satisfies Meta<typeof ProfilePage>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.Light), StoreDecorator({ })]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({ })]
}
