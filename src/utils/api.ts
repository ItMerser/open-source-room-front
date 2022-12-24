import {Dispatch} from 'react'
import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import {BASE_API_URL} from 'const/common'
import {store} from 'store/store'
import {setLanguages, setTechnologies} from 'store/slices/commonSlice'
import {API} from 'routing'
import {LOADING_STATE} from 'models/enums/common'

export const request = (config: AxiosRequestConfig, setState: Dispatch<any>) => {
    setState((prev: any) => ({...prev, loading: LOADING_STATE.LOADING}))
    axios.request(config)
        .then(response => setState(() => ({
            data: response.data,
            error: null,
            loading: LOADING_STATE.LOADED
        })))
        .catch((error: AxiosError) => setState(() => ({
            data: null,
            error: error.response?.data,
            loading: LOADING_STATE.LOADED
        })))
}

export const loadLanguages = () => {
    const url = BASE_API_URL + API.LANGUAGES
    return axios.get(url).then(response => {
        store.dispatch(setLanguages(response.data))
    })
}

export const loadTechnologies = () => {
    const url = BASE_API_URL + API.TECHNOLOGIES
    return axios.get(url).then(response => {
        store.dispatch(setTechnologies(response.data))
    })
}