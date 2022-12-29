import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {ISpecialistProject} from 'models/types/specialist'

interface IInitialState {
    id: number | null
    nickname: string | null
    ownProjects: ISpecialistProject[] | null
    token: string | null
}

const initialState = {
    id: null,
    nickname: null,
    ownProjects: null,
    token: null
}

const specialistSlice = createSlice({
    name: 'specialist',
    initialState,
    reducers: {
        setTSpecialistId: (state: Draft<IInitialState>, payload: PayloadAction<number | null>) => {
            state.id = payload.payload
        },
        setTSpecialistNickname: (
            state: Draft<IInitialState>,
            payload: PayloadAction<string | null>
        ) => {
            state.nickname = payload.payload
        },
        setTOwnProjects: (
            state: Draft<IInitialState>,
            payload: PayloadAction<ISpecialistProject[] | null>
        ) => {
            state.ownProjects = payload.payload
        },
        setToken: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.token = payload.payload
        }
    }
})

export const {
    setTSpecialistId,
    setTSpecialistNickname,
    setTOwnProjects,
    setToken
} = specialistSlice.actions
export default specialistSlice.reducer