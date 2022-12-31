import React, {FC} from 'react'
import {Paper, Grid, Typography} from '@mui/material'
import ProfileProjectCard from 'components/cards/ProfileProjectCard/ProfileProjectCard'
import NewProfileProjectCard from 'components/cards/NewProfileProjectCard/NewProfileProjectCard'
import {ISpecialistProject} from 'models/types/specialist'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    title: string
    projects: ISpecialistProject[]
    isEditable: boolean
}

const ProjectsBlock: FC<Props> = (props) => {
    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>{props.title}</Typography>
            <Grid container direction="row" justifyContent="start" flexWrap="wrap">
                {props.projects.map((project, pk) => {
                    return (
                        <Grid item md={3} sm={6} xs={12} key={pk}>
                            <ProfileProjectCard project={project} isEditable={props.isEditable}/>
                        </Grid>
                    )
                })}
                {props.isEditable &&
                    <Grid item md={3} sm={6} xs={12}>
                        <NewProfileProjectCard/>
                    </Grid>
                }
            </Grid>
        </Paper>
    )
}

export default ProjectsBlock

const styles = {
    paper: {
        background: BACKGROUND_COLOR,
        margin: '1rem',
        padding: '1rem',
        minHeight: '10vh'
    },
    title: {
        color: TEXT_COLOR,
        textAlign: 'center',
        marginBottom: '1rem'
    },
    card: {
        minHeight: '4rem'
    }
}