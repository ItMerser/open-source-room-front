import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from 'pages/Home/Home'
import Specialists from 'pages/Specialists/Specialists'
import Projects from 'pages/Projects/Projects'
import Authentication from 'pages/Authentication/Authentication'
import {PAGE} from 'routing'

const Navigation: FC = () => {
    return (
        <Routes>
            <Route path={PAGE.HOME} element={<Home/>}/>

            <Route path={PAGE.SPECIALISTS} element={<Specialists/>}/>
            <Route path={PAGE.AUTHENTICATION} element={<Authentication/>}/>

            <Route path={PAGE.PROJECTS} element={<Projects/>}/>
        </Routes>
    )
}

export default Navigation