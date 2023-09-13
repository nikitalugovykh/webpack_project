import { lazy } from 'react'

export const AboutPageLazy = lazy(async () => await new Promise((resolve: any) => {
    setTimeout(() => {
        resolve(import('./AboutPage') as any)
    }, 1000)
}))
