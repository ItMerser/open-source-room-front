import React, {FC, useEffect, useState} from 'react'
import {Button, Chip, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Typography} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ClearIcon from '@mui/icons-material/Clear'
import LanguagesCheckBoxGroup from 'components/forms/LanguagesCheckBoxGroup/LanguagesCheckBoxGroup'
import {useRemoveSpecialistLanguages} from 'hooks/specialists'
import {useAppDispatch, useAppSelector} from 'store/config'
import {setUpdateProfileData} from 'store/slices/commonSlice'
import {LOADING_STATE} from 'models/enums/common'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    specialistLanguages: string[]
    isAddable?: boolean
}

const LanguagesBlock: FC<Props> = (props) => {
    const {loading, removeLanguages} = useRemoveSpecialistLanguages()
    const {token} = useAppSelector(state => state.specialistReducer)
    const dispatch = useAppDispatch()
    const [patchForm, setPatchForm] = useState<boolean>(false)

    const changePatchFormState = () => setPatchForm(!patchForm)

    const deleteLanguage = (language: string) => {
        removeLanguages({languages: [language]}, token || '')
    }

    useEffect(() => {
        if (loading === LOADING_STATE.LOADED) {
            dispatch(setUpdateProfileData())
        }
    }, [loading])

    return (
        <Paper elevation={12} sx={styles.paper}>
            <Typography variant="h5" sx={styles.title}>LANGUAGES</Typography>
            {props.specialistLanguages && props.specialistLanguages.map((lang: string, pk: number) => {
                if (props.isAddable) {
                    return (
                        <Chip
                            onDelete={() => deleteLanguage(lang)}
                            label={lang}
                            variant="outlined"
                            key={pk}
                            deleteIcon={<ClearIcon sx={styles.clearIcon}/>}
                            sx={styles.chip}
                        />
                    )
                } else {
                    return (
                        <Chip
                            label={lang}
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
                    Select languages witch do you own
                </DialogTitle>
                <DialogContent>
                    <LanguagesCheckBoxGroup specialistLanguages={props.specialistLanguages}
                                            closeForm={changePatchFormState}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={changePatchFormState}>CANCEL</Button>
                </DialogActions>
            </Dialog>
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