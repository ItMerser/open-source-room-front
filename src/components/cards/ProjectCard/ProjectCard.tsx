import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Card, Breadcrumbs, Typography, CardActions, Box} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import GitHubIcon from '@mui/icons-material/GitHub'
import {IProject} from 'models/types/project'
import {PAGE} from 'routing'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    project: IProject
}

const ProjectCard: FC<Props> = (props) => {
    return (
        <Card sx={styles.card}>
            <Breadcrumbs separator={<Typography variant="h5" sx={styles.separator}>/</Typography>}>
                <Typography component={Link} to="" variant="h5" sx={styles.text}>
                    {props.project.name}
                </Typography>
                <Typography component={Link} to="" variant="h5" sx={styles.text}>
                    <GitHubIcon sx={styles.githubIcon}/>
                    {props.project.githubName}
                </Typography>
            </Breadcrumbs>
            <Box sx={styles.infoBlock}>
                <Typography variant="h6" component="div" sx={styles.text}>
                    {props.project.type}
                </Typography>
                <Typography variant="h6" component="div" sx={styles.text}>
                    rating {props.project.rating}
                </Typography>
            </Box>
            <CardActions sx={styles.cardActions}>
                <Typography
                    component={Link}
                    to={PAGE.PROJECT_DETAIL.replace(
                        ':projectId',
                        props.project.id.toString()
                    )}
                    sx={styles.text}
                >
                    DETAIL
                </Typography>
                <Box>
                    <FavoriteIcon sx={styles.favoriteIcon}/>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProjectCard

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        padding: '1rem',
        background: BACKGROUND_COLOR
    },
    text: {
        textDecoration: 'none',
        color: TEXT_COLOR
    },
    infoBlock: {
        marginBottom: '1rem'
    },
    cardActions: {
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between'
    },
    favoriteIcon: {
        fill: TEXT_COLOR
    },
    separator: {
        color: TEXT_COLOR
    },
    githubIcon: {
        marginRight: '0.5rem'
    }
}