import type { StateScheme } from 'app/store'

export const getProfileData = (state: StateScheme) => state?.profile?.data
