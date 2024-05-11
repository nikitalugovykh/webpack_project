import { type StateScheme } from 'app/store'

export const getLoginPassword = (state: StateScheme) => state?.loginForm?.password ?? ''
