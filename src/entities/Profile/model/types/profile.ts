import { type Country, type Currency } from 'shared/constants/common'

export interface Profile {
    first: string
    last: string
    age: null
    currency: Currency
    country: Country
    city: string
    username: string
    avatar: string
}

export interface ProfileScheme {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
