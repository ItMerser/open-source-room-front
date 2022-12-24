import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {ITechnology} from 'models/types/common'

interface IInitialState {
    isOpenSideBar: boolean
    languages: string[] | null
    technologies: ITechnology[] | null
}

const initialState: IInitialState = {
    isOpenSideBar: false,
    languages: null,
    technologies: null
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setSideBarState: (state: Draft<IInitialState>) => {
            state.isOpenSideBar = !state.isOpenSideBar
        },
        setLanguages: (state: Draft<IInitialState>, payload: PayloadAction<string[] | null>) => {
            state.languages = payload.payload
        },
        setTechnologies: (state: Draft<IInitialState>, payload: PayloadAction<ITechnology[] | null>) => {
            state.technologies = payload.payload
        }
    }
})

export const {setSideBarState, setLanguages, setTechnologies} = commonSlice.actions
export default commonSlice.reducer