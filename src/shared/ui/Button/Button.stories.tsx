import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/ui/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' }
    }

} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        theme: 'primary',
        children: 'Click on me!'
    }
}

export const PrimaryDark: Story = {
    args: {
        theme: 'primary',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const Background: Story = {
    args: {
        theme: 'background',
        children: 'Click on me!'
    }
}

export const BackgroundDark: Story = {
    args: {
        theme: 'background',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const BackgroundInverted: Story = {
    args: {
        theme: 'backgroundInverted',
        children: 'Click on me!'
    }
}

export const BackgroundInvertedDark: Story = {
    args: {
        theme: 'backgroundInverted',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const Secondary: Story = {
    args: {
        theme: 'secondary',
        children: 'Click on me!'
    }
}

export const SecondaryDark: Story = {
    args: {
        theme: 'secondary',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const Clear: Story = {
    args: {
        theme: 'clear',
        children: 'Click on me!'
    }
}

export const ClearInverted: Story = {
    args: {
        theme: 'clearInverted',
        children: 'Click on me!'
    }
}
export const ClearDark: Story = {
    args: {
        theme: 'clear',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const OutlineSmall: Story = {
    args: {
        theme: 'outline',
        children: 'Click on me!'
    }
}

export const OutlineMedium: Story = {
    args: {
        theme: 'outline',
        size: 'medium',
        children: 'Click on me!'
    }
}
export const OutlineLarge: Story = {
    args: {
        theme: 'outline',
        size: 'large',
        children: 'Click on me!'
    }
}

export const OutlineDark: Story = {
    args: {
        theme: 'outline',
        children: 'Click on me!'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const SquareSmall: Story = {
    args: {
        theme: 'backgroundInverted',
        square: true,
        size: 'small',
        children: '>'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const SquareMedium: Story = {
    args: {
        theme: 'backgroundInverted',
        size: 'medium',
        square: true,
        children: '>'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}

export const SquareLarge: Story = {
    args: {
        theme: 'backgroundInverted',
        size: 'large',
        square: true,
        children: '>'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
