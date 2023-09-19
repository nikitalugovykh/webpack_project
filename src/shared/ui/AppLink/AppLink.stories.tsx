import type { Meta, StoryObj } from '@storybook/react'

import AppLink from './AppLink'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/ui/AppLink',
    component: AppLink,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' }
    },
    args: {
        to: ''
    }

} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'link',
        to: '',
        variant: 'primary'
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'link',
        variant: 'primary'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const Secondary: Story = {
    args: {
        children: 'link',
        variant: 'secondary'
    }
}

export const SecondaryDark: Story = {
    args: {
        children: 'link',
        variant: 'secondary'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
