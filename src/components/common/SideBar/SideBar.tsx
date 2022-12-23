import React, {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {Box, List, ListItemButton, ListItem, ListItemText, ListItemIcon, Divider} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {ISideBarItem} from 'models/types/components'
import {TEXT_COLOR, BACKGROUND_COLOR} from 'const/styles'

interface Props {
    items: ISideBarItem[]
}

const SideBar: FC<Props> = (props) => {
    const [open, setOpen] = useState<boolean>(false)

    const changeSideBarState = () => setOpen(!open)

    return (
        <Box sx={styles.main}>
            <List>
                <ListItem disablePadding onClick={changeSideBarState}>
                    <ListItemButton sx={{justifyContent: `${open ? 'end' : 'start'}`}}>
                        <ListItemIcon sx={{minWidth: '2rem', marginRight: open ? '1rem' : 0}}>
                            {!open && <ArrowForwardIosIcon sx={styles.arrowIcon}/>}
                        </ListItemIcon>
                        {open && <ArrowBackIosNewIcon sx={styles.arrowIcon}/>}
                    </ListItemButton>
                </ListItem>
                <Divider sx={styles.divider}/>

                {props.items.map((item, pk) => {
                    return (
                        <ListItem disablePadding key={pk}>
                            <ListItemButton component={Link} to={item.link} sx={styles.listItemButton}>
                                <ListItemIcon sx={{minWidth: '2rem', marginRight: open ? '1rem' : 0}}>
                                    {item.icon}
                                </ListItemIcon>
                                {open && <ListItemText primary={item.title} sx={styles.listItemText}/>}
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