import React, {FC, useState} from 'react'
import {Button, Card, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ProjectCreationForm from 'components/forms/ProjectCreationForm/ProjectCreationForm'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

const NewProfileProjectCard: FC = () => {
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    return (
        <Card variant="outlined" sx={styles.card}>
            <AddIcon onClick={changePatchFormState} sx={styles.addIcon}/>

            <Dialog open={patchForm} onClose={changePatchFormState}>
                <DialogTitle textAlign="center">
                    CREATE YOUR OWN PROJECT
                </DialogTitle>
                <DialogContent>
                    <ProjectCreationForm closeForm={changePatchFormState}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={changePatchFormState}>CANCEL</Button>
                </DialogActions>
            </Dialog>
        </Card>
    )
}

export default NewProfileProjectCard

const styles = {
    card: {
        margin: '1rem',
        background: TEXT_COLOR,
        position: 'relative',
        minHeight: '10rem'
    },
    addIcon: {
        width: '2rem',
        height: '2rem',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: '-1rem',
        marginTop: '-1rem',
        '&:hover': {
            transform: 'scale(1.1)'
        },
        color: BACKGROUND_COLOR
    }
}