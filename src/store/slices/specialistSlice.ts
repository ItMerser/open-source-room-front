import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {ISpecialistProject} from 'models/types/specialist'
import {IProject} from 'models/types/project'

interface IInitialState {
    id: number | null
    nickname: string | null
    currentProject: ISpecialistProject | IProject | null
    ownProjects: ISpecialistProject[] | null
    token: string | null
}

const initialState = {
    id: null,
    nickname: null,
    currentProject: null,
    ownProjects: null,
    token: null
}

const specialistSlice = createSlice({
    name: 'specialist',
    initialState,
    reducers: {
        setSpecialistId: (state: Draft<IInitialState>, payload: PayloadAction<number | null>) => {
            state.id = payload.payload
        },
        setSpecialistNickname: (
            state: Draft<IInitialState>,
            payload: PayloadAction<string | null>
        ) => {
            state.nickname = payload.payload
        },
        setCurrentProject: (
            state: Draft<IInitialState>,
            payload: PayloadAction<ISpecialistProject | IProject | null>
        ) => {
            state.currentProject = payload.payload
        },
        setOwnProjects: (
            state: Draft<IInitialState>,
            payload: PayloadAction<ISpecialistProject[] | null>
        ) => {
            state.ownProjects = payload.payload
        },
        addOwnProject: (
            state: Draft<IInitialState>,
            payload: PayloadAction<ISpecialistProject>
        ) => {
            if (state.ownProjects) {
                state.ownProjects.push(payload.payload)
            } else {
                state.ownProjects = [payload.payload]
            }
        },
        setToken: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.token = payload.payload
        }
    }
})

export const {
    setSpecialistId,
    setSpecialistNickname,
    setCurrentProject,
    setOwnProjects,
    addOwnProject,
    setToken
} = specialistSlice.actions
export default specialistSlice.reducer