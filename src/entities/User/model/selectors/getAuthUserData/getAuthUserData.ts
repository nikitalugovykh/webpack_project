import { type StateScheme } from 'app/store'

export const getAuthUserData = (state: StateScheme) => state.user.authData
