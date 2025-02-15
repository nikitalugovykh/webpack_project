import type { StateScheme } from 'app/store'

export const getProfileError = (state: StateScheme) => state?.profile?.error
