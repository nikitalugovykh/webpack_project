import type { StateScheme } from 'app/store'

export const getProfileIsLoading = (state: StateScheme) => state?.profile?.isLoading
