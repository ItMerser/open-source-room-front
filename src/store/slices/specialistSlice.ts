import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'

interface IInitialState {
    isAuthenticated: boolean
    specialistId: number | null
    nickname: string | null
    token: string | null
}

const initialState = {
    isAuthenticated: false,
    specialistId: null,
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
        setSpecialistId: (state: Draft<IInitialState>, payload: PayloadAction<number | null>) => {
            state.specialistId = payload.payload
        },
        setNickname: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.nickname = payload.payload
        },
        setToken: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.token = payload.payload
        },
    }
})

export const {
    setAuthentication,
    setSpecialistId,
    setToken,
    setNickname
} = specialistSlice.actions
export default specialistSlice.reducer