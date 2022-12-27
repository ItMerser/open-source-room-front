import React, {FC, ChangeEvent, useEffect} from 'react'
import {FormGroup, FormControlLabel, Checkbox, Box, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useAddLanguagesToSpecialist} from 'hooks/specialists'
import {useAppSelector, useAppDispatch} from 'store/config'
import {setUpdateProfileData} from 'store/slices/commonSlice'

interface Props {
    specialistLanguages: string[]
    closeForm: () => void
}

interface IData {
    languages: string[]
}

const notSelectedLanguages = (allLanguages: string[], specialistLanguages: string[]): string[] => {
    return allLanguages.filter((language) => !specialistLanguages.includes(language))
}

const LanguagesCheckBoxGroup: FC<Props> = (props) => {
    const {languages} = useAppSelector(state => state.commonReducer)
    const {token} = useAppSelector(state => state.specialistReducer)
    const {status, addLanguages} = useAddLanguagesToSpecialist()
    const languagesForAdding = notSelectedLanguages(languages || [], props.specialistLanguages)

    const dispatch = useAppDispatch()
    const {handleSubmit} = useForm({mode: 'onBlur'})

    const patchData: IData = {
        languages: []
    }

    const selectLanguage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            patchData.languages.push(e.target.value)
        } else {
            patchData.languages = patchData.languages.filter((language) => language !== e.target.value)
        }
    }

    const submit = () => {
        addLanguages(patchData, token || '')
    }

    useEffect(() => {
        if (status === 200) {
            props.closeForm()
            dispatch(setUpdateProfileData())
        }
    }, [status])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormGroup>
                {languagesForAdding.map((value, pk) => {
                    return (
                        <FormControlLabel
                            control={<Checkbox value={value} onChange={selectLanguage}/>}
                            label={value}
                            key={pk}
                        />
                    )
                })}
            </FormGroup>

            <Box sx={styles.submitButton}>
                <Button type="submit">ADD</Button>
            </Box>
        </form>
    )
}

export default LanguagesCheckBoxGroup

const styles = {
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}