import { lazy } from 'react'

export const ProfilePageLazy = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./ProfilePage') as any)
    }, 1000)
}))
