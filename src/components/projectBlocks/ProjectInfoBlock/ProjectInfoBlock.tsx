import React, {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Paper,
    Breadcrumbs,
    Typography,
    Box,
    List,
    ListItem,
    ListItemText, Button, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EditIcon from '@mui/icons-material/Edit'
import {IProject} from 'models/types/project'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'
import ProjectUpdatingForm from 'components/forms/ProjectUpdatingForm/ProjectUpdatingForm'

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
    const fieldsForShow = props.isEditable ? additionalFields : existsFields(props.project)
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    return (
        <Paper elevation={12} sx={styles.paper}>
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

            {props.isEditable &&
                <Button sx={styles.editMainInfoButton} onClick={changePatchFormState}>
                    <EditIcon/>
                </Button>
            }

            <Dialog open={patchForm} onClose={changePatchFormState}>
                <DialogTitle textAlign="center">
                    Change the data witch you want to update
                </DialogTitle>
                <DialogContent>
                    <ProjectUpdatingForm
                        project={props.project}
                        closeForm={changePatchFormState}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={changePatchFormState}>CANCEL</Button>
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
    editMainInfoButton: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
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