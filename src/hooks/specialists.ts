import {useState} from 'react'
import {AxiosRequestConfig} from 'axios'
import {Method} from 'models/enums/common'
import {BASE_API_URL, DEFAULT_INITIAL_STATE} from 'const/common'
import {API} from 'routing'
import {request} from 'utils/api'
import {IListSpecialistsState} from 'models/types/states'

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