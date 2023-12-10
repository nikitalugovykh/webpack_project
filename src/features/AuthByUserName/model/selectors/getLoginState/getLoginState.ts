import { type StateScheme } from 'app/store'
import { type LoginScheme } from 'features/AuthByUserName'

export const getLoginState = (state: StateScheme): LoginScheme => state.loginForm
