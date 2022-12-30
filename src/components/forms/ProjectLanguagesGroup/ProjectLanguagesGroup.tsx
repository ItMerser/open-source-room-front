import React, {FC, ChangeEvent, useEffect} from 'react'
import {FormGroup, FormControlLabel, Checkbox, Box, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useAddLanguagesToProject} from 'hooks/project'
import {useAppSelector, useAppDispatch} from 'store/config'
import {setUpdateConfigurationData} from 'store/slices/commonSlice'
import {languagesForChoice} from 'utils/common'

interface Props {
    projectId: number
    projectLanguages: string[]
    closeForm: () => void
}

interface IData {
    languages: string[]
}

const ProjectLanguagesGroup: FC<Props> = (props) => {
    const {languages} = useAppSelector(state => state.commonReducer)
    const {token} = useAppSelector(state => state.specialistReducer)
    const {status, addLanguages} = useAddLanguagesToProject()
    const languagesForAdding = languagesForChoice(
        languages || [],
        props.projectLanguages
    )

    const dispatch = useAppDispatch()
    const {handleSubmit} = useForm({mode: 'onBlur'})

    const patchData: IData = {
        languages: []
    }

    const selectLanguage = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            patchData.languages.push(e.target.value)
        } else {
            patchData.languages = patchData.languages.filter(
                (language) => language !== e.target.value
            )
        }
    }

    const submit = () => {
        addLanguages(patchData, props.projectId,token || '')
    }

    useEffect(() => {
        if (status === 200) {
            props.closeForm()
            dispatch(setUpdateConfigurationData())
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

export default ProjectLanguagesGroup

const styles = {
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}