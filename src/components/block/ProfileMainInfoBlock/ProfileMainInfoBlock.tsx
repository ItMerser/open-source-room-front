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
import UpdateSpecialistDataForm from 'components/forms/UpdateSpecialistDataForm/UpdateSpecialistDataForm'
import {getPDFPage} from 'services/pdf'
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
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    const downloadResume = getPDFPage('resume', `${props.specialist.nickname}`)

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

            {props.showEmptyValues
                ? <Button sx={styles.editMainInfoButton} onClick={changePatchFormState}>
                    <EditIcon/>
                </Button>
                : <Button sx={styles.editMainInfoButton} onClick={downloadResume}>
                    <DownloadIcon/>
                </Button>
            }

            {/*Form for updating specialist data*/}
            <Dialog open={patchForm} onClose={changePatchFormState}>
                <DialogTitle textAlign="center">
                    Change the data witch you want to update
                </DialogTitle>
                <DialogContent>
                    <UpdateSpecialistDataForm specialist={props.specialist} closeForm={changePatchFormState}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={changePatchFormState}>CANCEL</Button>
                </DialogActions>
            </Dialog>

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