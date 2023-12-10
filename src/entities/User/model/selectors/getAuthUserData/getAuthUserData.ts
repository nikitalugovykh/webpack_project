import { type StateScheme } from 'app/store'
import { type User } from 'entities/User'

export const getAuthUserData = (state: StateScheme): User => state.user.authData
