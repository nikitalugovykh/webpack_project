import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from './NavBar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'widget/ui/NavBar',
    component: NavBar,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' }
    }

} satisfies Meta<typeof NavBar>

export default meta

type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
    decorators: [StoreDecorator({ loginForm: { username: 'test', password: 'test' } })]
}

export const NormalLogout: Story = {
    decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({ user: { authData: { username: 'test' } } })]
}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({ loginForm: { username: 'test', password: 'test' } })]
}
