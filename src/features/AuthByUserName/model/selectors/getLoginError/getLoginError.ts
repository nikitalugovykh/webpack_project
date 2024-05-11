import { type StateScheme } from 'app/store'

export const getLoginError = (state: StateScheme) => state?.loginForm?.error ?? ''
