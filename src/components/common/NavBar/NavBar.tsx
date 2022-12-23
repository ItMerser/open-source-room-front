import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button} from '@mui/material'
import {PAGE} from 'routing'
import {useAppSelector} from 'store/config'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

const NavBar: FC = () => {
    const {isAuthenticated, nickname} = useAppSelector(state => state.specialistReducer)
    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolBar}>
                <Button component={Link} to={PAGE.HOME} sx={styles.button}>APP</Button>
                {
                    isAuthenticated
                        ? <Button component={Link} to="" sx={styles.button}>{nickname}</Button>
                        : <Button component={Link} to={PAGE.AUTHENTICATION} sx={styles.button}>SIGN IN</Button>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar

const styles = {
    appBar: {
        background: BACKGROUND_COLOR,
        boxShadow: 'none'
    },
    toolBar: {
        direction: 'row',
        justifyContent: 'space-between'
    },
    button: {
        color: TEXT_COLOR
    }
}