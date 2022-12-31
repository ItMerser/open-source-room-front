import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, Divider, Typography, Box} from '@mui/material'
import {lightGreen} from '@mui/material/colors'
import GitHubIcon from '@mui/icons-material/GitHub'
import {PAGE} from 'routing'
import {BACKGROUND_COLOR, ERROR_MESSAGE_COLOR, TEXT_COLOR} from 'const/styles'
import {IProjectSpecialist} from 'models/types/project'

interface Props {
    specialist: IProjectSpecialist
}

const ProjectTeammateCard: FC<Props> = (props) => {
    return (
        <Card variant="outlined" sx={styles.card}>
            <Typography variant="h6" sx={styles.info}>
                {props.specialist.nickname}
            </Typography>
            <Typography variant="h6" sx={styles.info}>
                <GitHubIcon fontSize="small" sx={styles.githubIcon}/>
                {props.specialist.githubNickname}
            </Typography>
            <Typography variant="h6" sx={styles.info}>{props.specialist.direction}</Typography>

            <Divider sx={styles.divider}/>

            <Box sx={styles.cardActions}>
                <Button
                    component={Link}
                    to={PAGE.RESUME.replace(
                        ':specialistId',
                        props.specialist.id.toString()
                    )}
                    size="small"
                    sx={styles.button}
                >
                    DETAIL
                </Button>
            </Box>
        </Card>
    )
}

export default ProjectTeammateCard

const styles = {
    card: {
        margin: '1rem',
        backgroundColor: TEXT_COLOR,
        minHeight: '9rem',
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
    deleteButton: {
        color: ERROR_MESSAGE_COLOR
    },
    githubIcon: {
        marginRight: '0.5rem'
    }
}