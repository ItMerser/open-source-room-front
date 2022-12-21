import React, {FC} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from 'pages/Home/Home'
import {PAGE} from 'routing'

const Navigation: FC = () => {
    return (
        <Routes>
            <Route path={PAGE.HOME} element={<Home/>}/>
        </Routes>
    )
}

export default Navigation