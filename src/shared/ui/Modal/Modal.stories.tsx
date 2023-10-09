import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'shared/config/theme'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'shared/ui/Modal',
    component: Modal,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered'
    },
    argTypes: {
        onClose: () => {}
    }

} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const ModalLight: Story = {
    args: {
        isOpen: true,
        // element: Array.from(document.querySelectorAll<HTMLDivElement>('.app')).pop(),
        children: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'
    }
}

// TODO: loki work incorrect, need attention!!!

export const ModalDark: Story = {
    args: {
        isOpen: true,
        // element: Array.from(document.querySelectorAll<HTMLDivElement>('.app')).pop(),
        children: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum? lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum?'
    },
    decorators: [ThemeDecorator(Theme.Dark)]
}
