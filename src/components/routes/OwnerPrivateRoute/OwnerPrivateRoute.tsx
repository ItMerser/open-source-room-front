import React, {FC} from 'react'
import {Navigate, Outlet, useParams} from 'react-router-dom'
import {PAGE} from 'routing'
import {useAppSelector} from 'store/config'

const OwnerPrivateRoute: FC = () => {
    const {specialistId: idFromUrl} = useParams()
    const {id} = useAppSelector(state => state.specialistReducer)

    if (id === Number(idFromUrl)) {
        return <Outlet/>
    } else {
        return <Navigate to={PAGE.AUTHENTICATION}/>
    }
}

export default OwnerPrivateRoute