import { type StateScheme } from 'app/store'

export const getLoginLoading = (state: StateScheme) => state?.loginForm?.isLoading ?? false
