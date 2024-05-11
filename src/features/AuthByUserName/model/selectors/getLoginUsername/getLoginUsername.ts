import { type StateScheme } from 'app/store'

export const getLoginUsername = (state: StateScheme) => state?.loginForm?.username ?? ''
