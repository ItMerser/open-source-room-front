import {useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {Method} from 'models/enums/common'
import {BASE_API_URL, DEFAULT_INITIAL_STATE} from 'const/common'
import {API} from 'routing'
import {request} from 'utils/api'
import {
    IListSpecialistsState,
    IRetrieveSpecialistState,
    ICreateSpecialistState,
    IAuthenticateSpecialistState,
    IUpdateSpecialistState,
    IAddLanguagesToSpecialistState,
    IAddTechnologiesToSpecialistState,
    IRemoveSpecialistLanguages,
    IRemoveSpecialistTechnologies
} from 'models/types/states'

export const useListSpecialists = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<IListSpecialistsState>(DEFAULT_INITIAL_STATE)

    const getSpecialists = (searchParams = {}) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.SPECIALISTS,
            method: Method.GET,
            params: searchParams
        }
        request(config, setState)
    }

    return {status, data, error, loading, getSpecialists}
}

export const useRetrieveSpecialist = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IRetrieveSpecialistState>(DEFAULT_INITIAL_STATE)

    const getSpecialist = (specialistId: number) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.RETRIEVE_SPECIALIST.replace(
                ':specialistId',
                specialistId.toString()
            ),
            method: Method.GET
        }
        request(config, setState)
    }

    return {status, data, error, loading, getSpecialist}
}

export const useCreateSpecialist = () => {
    const [{
        status,
        data,
        error,
        loading
    }, setState] = useState<ICreateSpecialistState>(DEFAULT_INITIAL_STATE)

    const registrate = (data: unknown) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.CREATE_SPECIALIST,
            method: Method.POST,
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, registrate}
}

export const useAuthenticateSpecialist = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IAuthenticateSpecialistState>(DEFAULT_INITIAL_STATE)

    const authenticate = (data: unknown) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.AUTHENTICATE_SPECIALIST,
            method: Method.POST,
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, authenticate}
}

export const useUpdateSpecialist = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IUpdateSpecialistState>(DEFAULT_INITIAL_STATE)

    const update = (data: unknown, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.UPDATE_SPECIALIST,
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, update}
}

export const useAddLanguagesToSpecialist = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IAddLanguagesToSpecialistState>(DEFAULT_INITIAL_STATE)

    const addLanguages = (data: any, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.ADD_LANGUAGES_TO_SPECIALIST,
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, addLanguages}
}

export const useRemoveSpecialistLanguages = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IRemoveSpecialistLanguages>(DEFAULT_INITIAL_STATE)

    const removeLanguages = (data: unknown, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.REMOVE_SPECIALIST_LANGUAGES,
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, removeLanguages}
}

export const useAddTechnologiesToSpecialist = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IAddTechnologiesToSpecialistState>(DEFAULT_INITIAL_STATE)

    const addTechnologies = (data: unknown, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.ADD_TECHNOLOGIES_TO_SPECIALIST,
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, addTechnologies}
}

export const useRemoveSpecialistTechnologies = () => {
    const [
        {status, data, error, loading},
        setState
    ] = useState<IRemoveSpecialistTechnologies>(DEFAULT_INITIAL_STATE)

    const removeTechnologies = (data: unknown, token: string) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.REMOVE_SPECIALIST_TECHNOLOGIES,
            method: Method.PATCH,
            headers: {Authorization: `Token ${token}`},
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, removeTechnologies}
}