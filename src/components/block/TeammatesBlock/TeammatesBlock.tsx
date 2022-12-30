import React, {FC} from 'react'
import {Paper, Grid, Typography} from '@mui/material'
import ProjectTeammateCard from 'components/cards/ProjectTeammateCard/ProjectTeammateCard'
import NewProjectSpecialistCard
    from 'components/cards/NewProjectSpecialistCard/NewProjectSpecialistCard'
import {IProjectSpecialist} from 'models/types/project'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    specialists: IProjectSpecialist[]
    isEditable?: boolean
}

const TeammatesBlock: FC<Props> = (props) => {
    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>TEAM</Typography>
            <Grid container direction="row" justifyContent="start" flexWrap="wrap">
                {props.specialists.map((specialist, pk) => {
                    return (
                        <Grid item md={3} sm={6} xs={12} key={pk}>
                            <ProjectTeammateCard specialist={specialist}
                                                 isEditable={props.isEditable}/>
                        </Grid>
                    )
                })}
                {props.isEditable &&
                    <Grid item md={3} sm={6} xs={12}>
                        <NewProjectSpecialistCard/>
                    </Grid>
                }
            </Grid>
        </Paper>
    )
}

export default TeammatesBlock

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