import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import AuthPrivateRoute from 'components/routes/AuthPrivateRoute/AuthPrivateRoute'
import OwnerPrivateRoute from 'components/routes/OwnerPrivateRoute/OwnerPrivateRoute'
import Home from 'pages/Home/Home'
import Specialists from 'pages/Specialists/Specialists'
import Projects from 'pages/Projects/Projects'
import Authentication from 'pages/Authentication/Authentication'
import Profile from 'pages/Profile/Profile'
import Resume from 'pages/Resume/Resume'
import {PAGE} from 'routing'

const Navigation: FC = () => {
    return (
        <Routes>
            <Route path={PAGE.HOME}>
                <Route path={PAGE.HOME} element={<Home/>}/>
                <Route path={PAGE.AUTHENTICATION} element={<Authentication/>}/>

                <Route path={PAGE.SPECIALISTS} element={<Specialists/>}/>

                <Route path={PAGE.PROJECTS} element={<Projects/>}/>

                <Route element={<AuthPrivateRoute/>}>
                    <Route path={PAGE.RESUME} element={<Resume/>}/>
                </Route>

                <Route element={<OwnerPrivateRoute/>}>
                    <Route path={PAGE.PROFILE} element={<Profile/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Navigation