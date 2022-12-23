import {LOADING_STATE} from 'models/enums/common'
import {ISpecialist} from 'models/types/specialist'

interface State {
    status: number | null
    error: object | null
    loading: LOADING_STATE
}

// Specialist States
export interface IListSpecialistsState extends State {
    data: ISpecialist[] | null
}