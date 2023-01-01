import React, {FC, useState} from 'react'
import {Link} from 'react-router-dom'
import {
    Paper,
    Box,
    Typography,
    Breadcrumbs,
    List,
    ListItem,
    ListItemText,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material'
import {ISpecialist} from 'models/types/specialist'
import GitHubIcon from '@mui/icons-material/GitHub'
import EditIcon from '@mui/icons-material/Edit'
import DownloadIcon from '@mui/icons-material/Download'
import SpecialistUpdatingForm from 'components/forms/SpecialistUpdatingForm/SpecialistUpdatingForm'
import {getPDFPage} from 'services/pdf'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    specialist: ISpecialist
    isEditable: boolean
}

const additionalFields = ['name', 'surname', 'age', 'email', 'country', 'city', 'github']

const existsFields = (specialist: ISpecialist): string[] => {
    return additionalFields.filter((field) => {
        if (specialist[field as keyof ISpecialist]) {
            return field
        }
    })
}

const SpecialistInfoBlock: FC<Props> = (props) => {
    const fieldsForShow = props.isEditable ? additionalFields : existsFields(props.specialist)
    const [editFormState, setEditFormState] = useState<boolean>(false)

    const changeEditFormState = () => setEditFormState(!editFormState)

    const downloadResume = getPDFPage('resume', `${props.specialist.nickname}`)

    return (
        <Paper elevation={12} sx={styles.paper}>
            {props.isEditable
                ? <Box sx={styles.actionsBlock}>
                    <Button sx={styles.actionButton} onClick={changeEditFormState}>
                        <EditIcon/>
                    </Button>
                </Box>
                : <Box sx={styles.actionsBlock}>
                    <Button sx={styles.actionButton} onClick={downloadResume}>
                        <DownloadIcon/>
                    </Button>
                </Box>
            }

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

            <Dialog open={editFormState} onClose={changeEditFormState}>
                <DialogTitle textAlign="center">
                    Change the data witch you want to update
                </DialogTitle>
                <DialogContent>
                    <SpecialistUpdatingForm
                        specialist={props.specialist}
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
                    {props.specialist.direction}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={styles.text}
                >
                    RATING {props.specialist.rating}
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

export default SpecialistInfoBlock

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