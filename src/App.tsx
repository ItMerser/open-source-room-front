import React, {FC} from 'react'
import {Box} from '@mui/material'
import Navigation from 'Navigation'
import NavBar from 'components/common/NavBar/NavBar'
import 'App.css'

const App: FC = () => {
    return (
        <Box className="App">
            <NavBar/>
            <Navigation/>
        </Box>
    )
}

export default App