import {useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {
    IListProjectsState,
    IRetrieveProjectState,
    ICreateProjectsState,
    IUpdateProjectsState,
    IDeleteProjectsState,
    IAddLanguagesToProjectState,
    IRemoveProjectLanguagesState,
    IAddTechnologiesToProjectState,
    IRemoveProjectTechnologiesState,
    ITakePartInOwnProjectState
} from 'models/types/states'
import {BASE_API_URL, DEFAULT_INITIAL_STATE} from 'const/common'
import {API} from 'routing'
import {Method} from 'models/enums/common'
import {request} from 'utils/api'

export const useListProjects = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IListProjectsState>(DEFAULT_INITIAL_STATE)

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

export const useRetrieveProject = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IRetrieveProjectState>(DEFAULT_INITIAL_STATE)

    const getProject = (projectId: number) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.RETRIEVE_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.GET
        }
        request(config, setState)
    }

    return {status, data, error, loading, getProject}
}

export const useCreateProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<ICreateProjectsState>(DEFAULT_INITIAL_STATE)

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

export const useUpdateProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IUpdateProjectsState>(DEFAULT_INITIAL_STATE)

    const update = (data: unknown, projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.UPDATE_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, update}
}

export const useDeleteProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IDeleteProjectsState>(DEFAULT_INITIAL_STATE)

    const deleteProject = (projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.DELETE_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.DELETE,
            headers: {Authorization: `Token ${token}`}
        }
        request(config, setState)
    }

    return {status, data, error, loading, deleteProject}
}

export const useAddLanguagesToProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IAddLanguagesToProjectState>(DEFAULT_INITIAL_STATE)

    const addLanguages = (data: unknown, projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.ADD_LANGUAGES_TO_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, addLanguages}
}

export const useRemoveProjectLanguages = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IRemoveProjectLanguagesState>(DEFAULT_INITIAL_STATE)

    const removeLanguages = (data: unknown, projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.REMOVE_PROJECT_LANGUAGES.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, removeLanguages}
}

export const useAddTechnologiesToProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IAddTechnologiesToProjectState>(DEFAULT_INITIAL_STATE)

    const addTechnologies = (data: unknown, projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.ADD_TECHNOLOGIES_TO_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, addTechnologies}
}

export const useRemoveProjectTechnologies = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IRemoveProjectTechnologiesState>(DEFAULT_INITIAL_STATE)

    const removeTechnologies = (data: unknown, projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.REMOVE_PROJECT_TECHNOLOGIES.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, removeTechnologies}
}

export const useTakePartInOwnProject = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IRemoveProjectTechnologiesState>(DEFAULT_INITIAL_STATE)

    const takePart = (projectId: number, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.TAKE_PART_IN_OWN_PROJECT.replace(
                ':projectId',
                projectId.toString()
            ),
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
        }
        request(config, setState)
    }

    return {status, data, error, loading, takePart}
}

