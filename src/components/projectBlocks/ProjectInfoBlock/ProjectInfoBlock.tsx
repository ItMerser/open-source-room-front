import React, {FC, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Paper,
    Breadcrumbs,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material'
import ProjectUpdatingForm from 'components/forms/ProjectUpdatingForm/ProjectUpdatingForm'
import GitHubIcon from '@mui/icons-material/GitHub'
import EditIcon from '@mui/icons-material/Edit'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import {IProject} from 'models/types/project'
import {useTakePartInOwnProject} from 'hooks/project'
import {useAppDispatch, useAppSelector} from 'store/config'
import {setUpdateConfigurationData} from 'store/slices/commonSlice'
import {setCurrentProject} from 'store/slices/specialistSlice'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    project: IProject
    isEditable: boolean
}

const additionalFields = ['github']

const existsFields = (project: IProject): string[] => {
    return additionalFields.filter((field) => {
        if (project[field as keyof IProject]) {
            return field
        }
    })
}

const ProjectInfoBlock: FC<Props> = (props) => {
    const {token, currentProject} = useAppSelector(state => state.specialistReducer)
    const fieldsForShow = props.isEditable ? additionalFields : existsFields(props.project)
    const {status, takePart} = useTakePartInOwnProject()
    const [editFormState, setEditFormState] = useState<boolean>(false)

    const isCurrentProject = (): boolean => {
        return !!(currentProject && currentProject['id'] === props.project.id)
    }

    const changeEditFormState = () => setEditFormState(!editFormState)

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (status === 200) {
            dispatch(setCurrentProject(props.project))
            dispatch(setUpdateConfigurationData())
        }
    }, [status])

    return (
        <Paper elevation={12} sx={styles.paper}>
            {props.isEditable &&
                <Box sx={styles.actionsBlock}>
                    {!isCurrentProject() &&
                        <Button
                            sx={styles.actionButton}
                            onClick={() => takePart(props.project.id, token || '')
                            }>
                            <PersonAddIcon/>
                        </Button>
                    }
                    <Button sx={styles.actionButton} onClick={changeEditFormState}>
                        <EditIcon/>
                    </Button>
                </Box>
            }

            <Breadcrumbs separator={<Typography variant="h4" sx={styles.separator}>/</Typography>}
                         sx={styles.breadcrumbs}>
                <Typography component={Link} to="" variant="h4" sx={styles.text}>
                    {props.project.name}
                </Typography>
                <Typography component={Link} to="" variant="h4" sx={styles.text}>
                    <GitHubIcon sx={styles.githubIcon}/>
                    {props.project.githubName}
                </Typography>
            </Breadcrumbs>

            <Dialog open={editFormState} onClose={changeEditFormState}>
                <DialogTitle textAlign="center">
                    Change the data witch you want to update
                </DialogTitle>
                <DialogContent>
                    <ProjectUpdatingForm
                        project={props.project}
                        closeForm={changeEditFormState}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={changeEditFormState}>CANCEL</Button>
                </DialogActions>
            </Dialog>

            <Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.text}
                >
                    {props.project.type}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.text}
                >
                    RATING {props.project.rating}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.text}
                >
                    VERSION {props.project.version}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.text}
                >
                    START DATE: {props.project.startDate.toString()}
                </Typography>
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
                            const value = props.project[field as keyof IProject]
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

export default ProjectInfoBlock

const styles = {
    paper: {
        margin: '1rem',
        padding: '1rem',
        background: BACKGROUND_COLOR,
        position: 'relative'
    },
    actionsBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    actionButton: {
        color: TEXT_COLOR
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