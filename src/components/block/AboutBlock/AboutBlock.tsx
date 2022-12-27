import React, {FC} from 'react'
import {Paper, Typography} from '@mui/material'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    about: string
}

const AboutBlock: FC<Props> = (props) => {
    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>ABOUT</Typography>
            {props.about}
        </Paper>
    )
}

export default AboutBlock

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
    }
}