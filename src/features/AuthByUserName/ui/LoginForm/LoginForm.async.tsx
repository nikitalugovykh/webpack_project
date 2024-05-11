import { type FC, lazy } from 'react'
import { type LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./LoginForm') as any)
    }, 1000)
}))
