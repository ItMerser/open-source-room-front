import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {ITechnology} from 'models/types/common'

interface IInitialState {
    isOpenSideBar: boolean
    languages: string[] | null
    technologies: ITechnology[] | null
    updateProfileData: boolean
}

const initialState: IInitialState = {
    isOpenSideBar: false,
    languages: null,
    technologies: null,
    updateProfileData: false
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
        },
        setUpdateProfileData: (state: Draft<IInitialState>) => {
            state.updateProfileData = !state.updateProfileData
        }
    }
})

export const {setSideBarState, setLanguages, setTechnologies, setUpdateProfileData} = commonSlice.actions
export default commonSlice.reducer