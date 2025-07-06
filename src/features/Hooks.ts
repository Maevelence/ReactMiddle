import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux'
import type { RootState, AppDispatch } from '../entities/Store'


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

