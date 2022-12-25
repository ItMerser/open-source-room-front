import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Paper, Box, Typography, Breadcrumbs, List, ListItem, ListItemText} from '@mui/material'
import {ISpecialist} from 'models/types/specialist'
import GitHubIcon from '@mui/icons-material/GitHub'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    specialist: ISpecialist
    showEmptyValues: boolean
}

const additionalFields = ['name', 'surname', 'age', 'email', 'country', 'city', 'github']

const existsFields = (specialist: ISpecialist): string[] => {
    return additionalFields.filter((field) => {
        if (specialist[field as keyof ISpecialist]) {
            return field
        }
    })
}

const ProfileMainInfoBlock: FC<Props> = (props) => {
    const fieldsForShow = props.showEmptyValues ? additionalFields : existsFields(props.specialist)

    return (
        <Paper elevation={12} sx={styles.paper}>
            <Breadcrumbs separator={<Typography variant="h4" sx={styles.separator}>/</Typography>}
                         sx={styles.breadcrumbs}>
                <Typography component={Link} to="" variant="h4" sx={styles.text}>
                    {props.specialist.nickname}
                </Typography>
                <Typography component={Link} to="" variant="h4" sx={styles.text}>
                    <GitHubIcon sx={styles.githubIcon}/>
                    {props.specialist.githubNickname}
                </Typography>
            </Breadcrumbs>

            <Box>
                <Typography variant="h6" component="div" sx={styles.text}>{props.specialist.direction}</Typography>
                <Typography variant="h6" component="div" sx={styles.text}>RATING {props.specialist.rating}</Typography>
            </Box>

            {
                fieldsForShow.length !== 0 &&
                <Box sx={styles.additionalInfoBlock}>
                    <Box sx={styles.additionalTitle}>
                        <Typography variant="h6" component="div">
                            ADDITIONAL INFORMATION
                        </Typography>
                    </Box>

                    <List>
                        {fieldsForShow.map((field, pk) => {
                            const value = props.specialist[field as keyof ISpecialist]
                            return (
                                <ListItem key={pk} disablePadding>
                                    <ListItemText sx={styles.listItemText}>
                                        {field.toUpperCase()}
                                    </ListItemText>
                                    <ListItemText sx={styles.listItemText}>
                                        {`${value ? value : ''}`}
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
            }
        </Paper>
    )
}

export default ProfileMainInfoBlock

const styles = {
    paper: {
        margin: '1rem',
        padding: '1rem',
        background: BACKGROUND_COLOR,
    },
    text: {
        textDecoration: 'none',
        color: TEXT_COLOR
    },
    separator: {
        color: TEXT_COLOR
    },
    breadcrumbs: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    githubIcon: {
        marginRight: '0.5rem'
    },
    additionalInfoBlock: {
        marginTop: '3rem',
        color: TEXT_COLOR
    },
    additionalTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        color: TEXT_COLOR,
        textAlign: 'left',
        width: '50%'
    },
}