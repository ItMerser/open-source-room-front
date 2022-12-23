import {useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {IListProjectsState} from 'models/types/states'
import {BASE_API_URL, DEFAULT_INITIAL_STATE} from 'const/common'
import {API} from 'routing'
import {Method} from 'models/enums/common'
import {request} from 'utils/api'

export const useListProjects = () => {
    const [{status, data, error, loading}, setState] = useState<IListProjectsState>(DEFAULT_INITIAL_STATE)

    const getProjects = (searchParams = {}) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.PROJECTS,
            method: Method.GET,
            params: searchParams
        }
        request(config, setState)
    }

    return {status, data, error, loading, getProjects}
}