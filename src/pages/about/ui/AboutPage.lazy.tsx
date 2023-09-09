import {lazy} from 'react'


export const AboutPageLazy = lazy(() => new Promise((res, rej) => {
  setTimeout(() => {
      res(import('./AboutPage') as any)
  },1000)
}))

