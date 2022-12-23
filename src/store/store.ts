import {combineReducers, configureStore} from '@reduxjs/toolkit'
import commonReducer from 'store/slices/commonSlice'
import specialistReducer from 'store/slices/specialistSlice'

export const rootReducer = combineReducers({
    commonReducer,
    specialistReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export const store = setupStore()