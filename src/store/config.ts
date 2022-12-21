import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {rootReducer, setupStore} from 'store/store'

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector