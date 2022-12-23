import {combineReducers, configureStore} from '@reduxjs/toolkit'
import commonReducer from 'store/slices/commonSlice'

export const rootReducer = combineReducers({
    commonReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export const store = setupStore()