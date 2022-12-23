import {createSlice, Draft} from '@reduxjs/toolkit'

interface IInitialState {
    isOpenSideBar: boolean
}

const initialState: IInitialState = {
    isOpenSideBar: false
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setSideBarState: (state: Draft<IInitialState>) => {
            state.isOpenSideBar = !state.isOpenSideBar
        }
    }
})

export const {setSideBarState} = commonSlice.actions
export default commonSlice.reducer