import { type CounterSchema } from 'entities/Counter'
import { type UserScheme } from 'entities/User'
import { type LoginScheme } from 'features/AuthByUserName'

export interface StateScheme {
    counter: CounterSchema
    user: UserScheme
    loginForm?: LoginScheme
}
