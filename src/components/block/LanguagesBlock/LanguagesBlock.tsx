import React, {FC} from 'react'
import {Paper, Typography, Chip} from '@mui/material'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    languages: string[]
}

const LanguagesBlock: FC<Props> = (props) => {
    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>LANGUAGES</Typography>
            {props.languages && props.languages.map((lang: string, pk: number) => {
                return (
                    <Chip label={lang} variant="outlined" key={pk} sx={styles.chip}/>
                )
            })}
        </Paper>
    )
}

export default LanguagesBlock

const styles = {
    paper: {
        margin: '1rem',
        padding: '0 1rem 1rem 1rem',
        background: BACKGROUND_COLOR,
        color: TEXT_COLOR,
        minHeight: '10vh'
    },
    title: {
        textAlign: 'center',
        marginBottom: '1rem'
    },
    chip: {
        margin: '0 1rem',
        color: TEXT_COLOR,
        '&:hover': {
            transform: 'scale(1.1)'
        },
    }
}