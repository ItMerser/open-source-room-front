import React, {FC} from 'react'
import {Navigate, Outlet} from 'react-router-dom'
import {PAGE} from 'routing'
import {useAppSelector} from 'store/config'

const AuthPrivateRoute: FC = () => {
    const {token} = useAppSelector(state => state.specialistReducer)

    if (token) {
        return <Outlet/>
    } else {
        return <Navigate to={PAGE.AUTHENTICATION}/>
    }
}

export default AuthPrivateRoute