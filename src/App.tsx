import React, {FC, useEffect} from 'react'
import {Box} from '@mui/material'
import Navigation from 'Navigation'
import NavBar from 'components/common/NavBar/NavBar'
import {loginByCookies} from 'utils/auth'
import {loadLanguages, loadTechnologies} from 'utils/api'
import 'App.css'

const App: FC = () => {

    useEffect(() => {
        loginByCookies()
        loadLanguages()
        loadTechnologies()
    }, [])

    return (
        <Box className="App">
            <NavBar/>
            <Navigation/>
        </Box>
    )
}

export default App