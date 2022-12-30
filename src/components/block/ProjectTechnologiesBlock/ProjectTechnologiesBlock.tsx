import React, {FC, useEffect, useState} from 'react'
import {
    Paper,
    Typography,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import ProjectTechnologiesGroup
    from 'components/forms/ProjectTechnologiesGroup/ProjectTechnologiesGroup'
import {useRemoveProjectTechnologies} from 'hooks/project'
import {useAppDispatch, useAppSelector} from 'store/config'
import {setUpdateConfigurationData} from 'store/slices/commonSlice'
import {LOADING_STATE} from 'models/enums/common'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    projectId: number
    projectTechnologies: string[]
    isAddable?: boolean
}

const ProjectTechnologiesBlock: FC<Props> = (props) => {
    const {loading, removeTechnologies} = useRemoveProjectTechnologies()
    const {token} = useAppSelector(state => state.specialistReducer)
    const dispatch = useAppDispatch()
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    const deleteTechnology = (technology: string) => {
        removeTechnologies({technologies: [technology]}, props.projectId, token || '')
    }

    useEffect(() => {
        if (loading === LOADING_STATE.LOADED) {
            dispatch(setUpdateConfigurationData())
        }
    }, [loading])

    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>TECHNOLOGIES</Typography>
            {props.projectTechnologies && props.projectTechnologies.map((tech: string, pk: number) => {
                if (props.isAddable) {
                    return (
                        <Chip
                            onDelete={() => deleteTechnology(tech)}
                            label={tech}
                            variant="outlined"
                            key={pk}
                            deleteIcon={<ClearIcon sx={styles.clearIcon}/>}
                            sx={styles.chip}
                        />
                    )
                } else {
                    return (
                        <Chip
                            label={tech}
                            variant="outlined"
                            key={pk}
                            sx={styles.chip}
                        />
                    )
                }
            })}
            {
                props.isAddable &&
                <Chip
                    onClick={changePatchFormState}
                    label={<AddIcon/>}
                    variant="outlined"
                    sx={styles.addChip}
                />
            }

            <Dialog open={patchForm} onClose={changePatchFormState}>
                <DialogTitle textAlign="center">
                    Select technologies witch uses in the project
                </DialogTitle>
                <DialogContent>
                    <ProjectTechnologiesGroup
                        projectTechnologies={props.projectTechnologies}
                        projectId={props.projectId}
                        closeForm={changePatchFormState}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={changePatchFormState}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </Paper>
    )
}

export default ProjectTechnologiesBlock

const styles = {
    paper: {
        margin: '1rem',
        padding: '1rem',
        background: BACKGROUND_COLOR,
        color: TEXT_COLOR,
        minHeight: '10vh'
    },
    title: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    chip: {
        margin: '1rem 1rem 0 0',
        color: TEXT_COLOR,
    },
    addChip: {
        margin: '1rem 1rem 0 0',
        color: TEXT_COLOR,
        '&:hover': {
            transform: 'scale(1.1)'
        },
    },
    clearIcon: {
        fill: TEXT_COLOR,
        '&:hover': {
            transform: 'scale(1.1)'
        },
    }
}