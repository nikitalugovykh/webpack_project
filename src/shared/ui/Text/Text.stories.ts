import type { Meta, StoryObj } from '@storybook/react'

import { Text, TextTheme } from './Text'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

const meta = {
    title: 'shared/ui/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const FullTextComponentTheme: Story = {
    args: {
        title: 'Title',
        text: 'Some long descriptions'
    }
}

export const FullTextError: Story = {
    args: {
        title: 'Title',
        text: 'Some long descriptions',
        theme: TextTheme.ERROR
    }
}

export const FullTextComponentDarkTheme: Story = {
    args: {
        title: 'Title',
        text: 'Some long descriptions'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const OnlyTitle: Story = {
    args: {
        title: 'Title'
    }
}

export const OnlyTitleDarkTheme: Story = {
    args: {
        title: 'Title'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const OnlyText: Story = {
    args: {
        text: 'Some long descriptions'
    }
}
export const OnlyTextDarkTheme: Story = {
    args: {
        text: 'Some long descriptions'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
