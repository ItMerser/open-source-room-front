import {setSpecialistData, setToken} from 'store/slices/specialistSlice'
import {COOKIES} from 'services/cookie'
import {store} from 'store/store'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'

export const login = (specialist: ISpecialist | ISpecialistWithToken, token: string) => {
  store.dispatch(setSpecialistData(specialist))
  store.dispatch(setToken(token))

  COOKIES.set('specialistId', specialist.id)
  COOKIES.set('token', token)
}

export const logout = () => {
  store.dispatch(setSpecialistData(null))
  store.dispatch(setToken(null))

  COOKIES.remove('specialistId')
  COOKIES.remove('token')
}