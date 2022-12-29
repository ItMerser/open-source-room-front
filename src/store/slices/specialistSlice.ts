import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'

interface IInitialState {
    specialist: ISpecialist | ISpecialistWithToken | null
    token: string | null
}

const initialState = {
    specialist: null,
    token: null
}

const specialistSlice = createSlice({
    name: 'specialist',
    initialState,
    reducers: {
        setSpecialistData: (
            state: Draft<IInitialState>,
            payload: PayloadAction<ISpecialist | ISpecialistWithToken | null>
        ) => {
            state.specialist = payload.payload
        },
        setToken: (state: Draft<IInitialState>, payload: PayloadAction<string | null>) => {
            state.token = payload.payload
        },
    }
})

export const {
    setSpecialistData,
    setToken,
} = specialistSlice.actions
export default specialistSlice.reducer