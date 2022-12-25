import React, {FC} from 'react'
import {Button, Card, Typography, Box, Divider} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import {lightGreen} from '@mui/material/colors'
import {Link} from 'react-router-dom'
import {ISpecialistProject} from 'models/types/specialist'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    project: ISpecialistProject
}

const ProfileProjectCard: FC<Props> = (props) => {

    return (
        <Card variant="outlined" sx={styles.card}>
            <Typography variant="h6" sx={styles.info}>
                {props.project.name}
            </Typography>
            <Typography variant="h6" sx={styles.info}>
                <GitHubIcon fontSize="small" sx={styles.githubIcon}/>
                {props.project.githubName}
            </Typography>
            <Typography variant="h6" sx={styles.info}>{props.project.type}</Typography>
            <Typography variant="h6" sx={styles.info}>
                {props.project.version}
            </Typography>

            <Divider sx={styles.divider}/>

            <Box sx={styles.cardActions}>
                <Button
                    component={Link}
                    to=""
                    size="small"
                    sx={styles.button}
                >
                    DETAIL
                </Button>
            </Box>
        </Card>
    )
}

export default ProfileProjectCard

const styles = {
    card: {
        margin: '1rem',
        backgroundColor: TEXT_COLOR,
        minHeight: '35vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    info: {
        textAlign: 'center',
        minHeight: '1.5rem',
        color: BACKGROUND_COLOR
    },
    divider: {
        width: '100%',
        borderColor: BACKGROUND_COLOR,
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        color: lightGreen['A400']
    },
    githubIcon: {
        marginRight: '0.5rem'
    }
}