import { type CounterSchema } from 'entities/Counter'
import { type UserScheme } from 'entities/User'

export interface StateScheme {
    counter: CounterSchema
    user: UserScheme
}
