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
    IAuthenticateSpecialistState
} from 'models/types/states'

export const useListSpecialists = () => {
    const [{status, data, error, loading}, setState] = useState<IListSpecialistsState>(DEFAULT_INITIAL_STATE)

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
      url: BASE_API_URL + API.RETRIEVE_SPECIALIST.replace(':specialistId', specialistId.toString()),
      method: Method.GET
    }
    request(config, setState)
  }

  return {status, data, error, loading, getSpecialist}
}

export const useCreateSpecialist = () => {
    const [{status, data, error, loading}, setState] = useState<ICreateSpecialistState>(DEFAULT_INITIAL_STATE)

    const registrate = (data: any) => {
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

    const authenticate = (data: any) => {
        const config: AxiosRequestConfig = {
            url: BASE_API_URL + API.AUTHENTICATE_SPECIALIST,
            method: Method.POST,
            data: data
        }
        request(config, setState)
    }

    return {status, data, error, loading, authenticate}
}