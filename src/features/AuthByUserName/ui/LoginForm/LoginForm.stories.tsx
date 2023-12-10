import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator'

const meta = {
    title: 'feature/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
    }

} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: '123' }
    })]
}

export const LoginWithError: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: '123', error: 'Some error' }
    })]
}

export const LoginWithLoadingStatus: Story = {
    args: {},
    decorators: [StoreDecorator({
        loginForm: { username: '123', password: '123', isLoading: true }
    })]
}
