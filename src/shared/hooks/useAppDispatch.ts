import { useDispatch } from 'react-redux'
import { type AppState, type TypedDispatch } from 'app/store/store'

export const useAppDispatch = () => useDispatch<TypedDispatch<AppState>>()
