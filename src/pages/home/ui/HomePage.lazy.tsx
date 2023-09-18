import { lazy } from 'react'

export const HomePageLazy = lazy(async () => await new Promise((resolve) => {
    setTimeout(() => {
        resolve(import('./HomePage') as any)
    }, 1000)
}))
