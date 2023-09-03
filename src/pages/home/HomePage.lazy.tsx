import React, {FC, lazy} from 'react'


export const HomePageLazy = lazy(() => new Promise((res, rej) => {
    setTimeout(() => {
        res(import('./HomePage') as any)
    },1000)
}))