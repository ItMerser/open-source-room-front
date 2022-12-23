import {Dispatch} from 'react'
import axios, {AxiosError, AxiosRequestConfig} from 'axios'
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