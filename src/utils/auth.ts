import {setAuthentication, setNickname, setToken} from 'store/slices/specialistSlice'
import {COOKIES} from 'services/cookie'
import {store} from 'store/store'

export const login = (nickname: string, token: string) => {
  store.dispatch(setAuthentication(true))
  store.dispatch(setNickname(nickname))
  store.dispatch(setToken(token))

  COOKIES.set('isAuthentication', true)
  COOKIES.set('nickname', nickname)
  COOKIES.set('token', token)
}

export const loginByCookies = () => {
  const isAuth = COOKIES.get('isAuthentication')
  if (isAuth === 'true') {
    store.dispatch(setAuthentication(true))
    store.dispatch(setNickname(COOKIES.get('nickname')))
    store.dispatch(setToken(COOKIES.get('token')))
  }
}

export const logout = () => {
  store.dispatch(setAuthentication(false))
  store.dispatch(setNickname(null))
  store.dispatch(setToken(null))

  COOKIES.remove('isAuthentication')
  COOKIES.remove('nickname')
  COOKIES.remove('token')
}