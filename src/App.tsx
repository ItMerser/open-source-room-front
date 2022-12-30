import React, {FC, useEffect} from 'react'
import {Box} from '@mui/material'
import Navigation from 'Navigation'
import NavBar from 'components/common/NavBar/NavBar'
import {useRetrieveSpecialist} from 'hooks/specialists'
import {login} from 'utils/auth'
import {COOKIES} from 'services/cookie'
import {loadLanguages, loadTechnologies} from 'utils/api'
import 'App.css'

const App: FC = () => {
    const specialistId = COOKIES.get('specialistId')
    const {data, getSpecialist} = useRetrieveSpecialist()

    useEffect(() => {
        if (specialistId) {
            getSpecialist(Number(specialistId))
        }
        loadLanguages()
        loadTechnologies()
    }, [])

    useEffect(() => {
        if (data) {
            login(data, COOKIES.get('token'))
        }
    }, [data])

    return (
        <Box className="App">
            <NavBar/>
            <Navigation/>
        </Box>
    )
}

export default App