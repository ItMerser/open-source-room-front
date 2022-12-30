import {LOADING_STATE} from 'models/enums/common'
import {Direction} from 'models/enums/specialist'
import {ProjectType} from 'models/enums/project'

export const BASE_API_URL = process.env.REACT_APP_API_URL

export const DEFAULT_INITIAL_STATE = {
    status: null,
    data: null,
    error: null,
    loading: LOADING_STATE.WAIT
}

export const DIRECTIONS = Object.values(Direction)
export const PROJECT_TYPES = Object.values(ProjectType)