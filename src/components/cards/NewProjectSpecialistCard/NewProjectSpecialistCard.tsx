import React, {FC, useState} from 'react'
import {Card} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

const NewProjectSpecialistCard: FC = () => {
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    return (
        <Card variant="outlined" sx={styles.card}>
            <AddIcon onClick={changePatchFormState} sx={styles.addIcon}/>
        </Card>
    )
}

export default NewProjectSpecialistCard

const styles = {
    card: {
        margin: '1rem',
        background: TEXT_COLOR,
        position: 'relative',
        minHeight: '9rem'
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