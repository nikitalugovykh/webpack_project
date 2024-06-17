import { type TypedUseSelectorHook, useSelector } from 'react-redux'
import { type StateScheme } from 'app/store'

export const useAppSelector: TypedUseSelectorHook<StateScheme> = useSelector
