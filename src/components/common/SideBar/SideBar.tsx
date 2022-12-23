import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Box, List, ListItemButton, ListItem, ListItemText, ListItemIcon, Divider} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {ISideBarItem} from 'models/types/components'
import {TEXT_COLOR, BACKGROUND_COLOR} from 'const/styles'
import {useAppSelector, useAppDispatch} from 'store/config'
import {setSideBarState} from 'store/slices/commonSlice'

interface Props {
    items: ISideBarItem[]
}

const SideBar: FC<Props> = (props) => {
    const dispatch = useAppDispatch()
    const {isOpenSideBar} = useAppSelector(state => state.commonReducer)

    const changeSideBarState = () => dispatch(setSideBarState())

    return (
        <Box sx={styles.main}>
            <List>
                <ListItem disablePadding onClick={changeSideBarState}>
                    <ListItemButton sx={{justifyContent: `${isOpenSideBar ? 'end' : 'start'}`}}>
                        <ListItemIcon sx={{minWidth: '2rem', marginRight: isOpenSideBar ? '1rem' : 0}}>
                            {!isOpenSideBar && <ArrowForwardIosIcon sx={styles.arrowIcon}/>}
                        </ListItemIcon>
                        {isOpenSideBar && <ArrowBackIosNewIcon sx={styles.arrowIcon}/>}
                    </ListItemButton>
                </ListItem>
                <Divider sx={styles.divider}/>

                {props.items.map((item, pk) => {
                    return (
                        <ListItem disablePadding key={pk}>
                            <ListItemButton component={Link} to={item.link} sx={styles.listItemButton}>
                                <ListItemIcon sx={{minWidth: '2rem', marginRight: isOpenSideBar ? '1rem' : 0}}>
                                    {item.icon}
                                </ListItemIcon>
                                {isOpenSideBar && <ListItemText primary={item.title} sx={styles.listItemText}/>}
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default SideBar

const styles = {
    main: {
        background: BACKGROUND_COLOR,
        height: '100%',
    },
    arrowIcon: {
        color: TEXT_COLOR
    },
    divider: {
        borderColor: TEXT_COLOR
    },
    listItemButton: {
        color: TEXT_COLOR
    },
    listItemText: {
        fontSize: '1rem',
    }
}