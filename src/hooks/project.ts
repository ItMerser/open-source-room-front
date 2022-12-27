import {useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {ICreateProjectsState, IDeleteProjectsState, IListProjectsState} from 'models/types/states'
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

export const useCreateProject = () => {
    const [{status, data, error, loading}, setState] = useState<ICreateProjectsState>(DEFAULT_INITIAL_STATE)

    const create = (data: unknown, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.CREATE_PROJECT,
            method: Method.POST,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, create}
}

export const useDeleteProject = () => {
    const [{status, data, error, loading}, setState] = useState<IDeleteProjectsState>(DEFAULT_INITIAL_STATE)

    const deleteProject = (projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.DELETE_PROJECT.replace(':projectId', projectId.toString()),
            method: Method.DELETE,
            headers: {Authorization: `Token ${token}`}
        }
        request(config, setState)
    }

    return {status, data, error, loading, deleteProject}
}