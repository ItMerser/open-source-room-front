import {
    setTSpecialistId,
    setTSpecialistNickname,
    setTOwnProjects,
    setToken
} from 'store/slices/specialistSlice'
import {COOKIES} from 'services/cookie'
import {store} from 'store/store'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'

export const login = (
    specialist: ISpecialist | ISpecialistWithToken,
    token: string | null = null
) => {
    store.dispatch(setTSpecialistId(specialist.id))
    store.dispatch(setTSpecialistNickname(specialist.nickname))
    store.dispatch(setTOwnProjects(specialist.ownProjects))
    if ('token' in specialist) {
        store.dispatch(setToken(specialist.token))
        COOKIES.set('token', specialist.token)
    } else {
        store.dispatch(setToken(token))
        COOKIES.set('token', token)
    }

    COOKIES.set('specialist', specialist)
}

export const logout = () => {
    store.dispatch(setTSpecialistId(null))
    store.dispatch(setTSpecialistNickname(null))
    store.dispatch(setTOwnProjects(null))
    store.dispatch(setToken(null))

    COOKIES.remove('specialist')
    COOKIES.remove('token')
}