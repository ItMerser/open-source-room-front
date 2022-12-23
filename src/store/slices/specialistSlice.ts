import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    isAuthenticated: boolean
    nickname: string | null
    token: string | null
}

const initialState = {
    isAuthenticated: false,
    nickname: null,
    token: null
}

const specialistSlice = createSlice({
    name: 'specialist',
    initialState,
    reducers: {
        setAuthentication: (state: Draft<IInitialState>, payload: PayloadAction<boolean>) => {
            state.isAuthenticated = payload.payload
        },
        setToken: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.token = payload.payload
        },
        setNickname: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.nickname = payload.payload
        }
    }
})

export const {
    setAuthentication,
    setToken,
    setNickname
} = specialistSlice.actions
export default specialistSlice.reducer