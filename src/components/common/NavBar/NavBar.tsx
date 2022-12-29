import React, {FC, MouseEvent, useState} from 'react'
import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    ListItemIcon,
    Tooltip
} from '@mui/material'
import Logout from '@mui/icons-material/Logout'
import {logout} from 'utils/auth'
import {PAGE} from 'routing'
import {useAppSelector} from 'store/config'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

const NavBar: FC = () => {
    const {specialist} = useAppSelector(state => state.specialistReducer)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    const handleClose = () => setAnchorEl(null)

    return (
        <AppBar position="static" sx={styles.appBar}>
            <Toolbar sx={styles.toolBar}>
                <Button component={Link} to={PAGE.HOME} sx={styles.button}>APP</Button>

                {specialist
                    ? <Tooltip title="menu">
                        <Button
                            sx={styles.button}
                            onClick={handleClick}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            {specialist['nickname']}
                        </Button>
                    </Tooltip>
                    : <Button component={Link} to={PAGE.AUTHENTICATION} sx={styles.button}>
                        SIGN IN
                    </Button>
                }
            </Toolbar>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                {specialist &&
                    <MenuItem
                        component={Link}
                        to={PAGE.PROFILE.replace(':specialistId', specialist['id'])}
                    >
                        <Avatar/>
                        Profile
                    </MenuItem>
                }
                <Divider/>
                <MenuItem component="button" onClick={logout}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
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