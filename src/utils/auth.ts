import {
    setSpecialistId,
    setSpecialistNickname,
    setOwnProjects,
    setToken
} from 'store/slices/specialistSlice'
import {COOKIES} from 'services/cookie'
import {store} from 'store/store'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'

export const login = (
    specialist: ISpecialist | ISpecialistWithToken,
    token: string | null = null
) => {
    store.dispatch(setSpecialistId(specialist.id))
    store.dispatch(setSpecialistNickname(specialist.nickname))
    store.dispatch(setOwnProjects(specialist.ownProjects))
    if ('token' in specialist) {
        store.dispatch(setToken(specialist.token))
        COOKIES.set('token', specialist.token)
    } else {
        store.dispatch(setToken(token))
        COOKIES.set('token', token)
    }

    COOKIES.set('specialistId', specialist.id)
}

export const logout = () => {
    store.dispatch(setSpecialistId(null))
    store.dispatch(setSpecialistNickname(null))
    store.dispatch(setOwnProjects(null))
    store.dispatch(setToken(null))

    COOKIES.remove('specialistId')
    COOKIES.remove('token')
}