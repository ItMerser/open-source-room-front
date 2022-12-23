import {LOADING_STATE} from 'models/enums/common'

export const BASE_API_URL = process.env.REACT_APP_API_URL

export const DEFAULT_INITIAL_STATE = {
    status: null,
    data: null,
    error: null,
    loading: LOADING_STATE.WAIT
}