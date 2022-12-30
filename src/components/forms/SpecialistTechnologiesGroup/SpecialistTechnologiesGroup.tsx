import React, {FC, ChangeEvent, useEffect} from 'react'
import {FormGroup, FormControlLabel, Checkbox, Box, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useAddTechnologiesToSpecialist} from 'hooks/specialists'
import {useAppSelector, useAppDispatch} from 'store/config'
import {setUpdateProfileData} from 'store/slices/commonSlice'
import {technologiesForChoice} from 'utils/common'

interface Props {
    specialistTechnologies: string[]
    closeForm: () => void
}

interface IData {
    technologies: string[]
}

const SpecialistTechnologiesGroup: FC<Props> = (props) => {
    const {technologies} = useAppSelector(state => state.commonReducer)
    const {token} = useAppSelector(state => state.specialistReducer)
    const {status, addTechnologies} = useAddTechnologiesToSpecialist()
    const technologiesForAdding = technologiesForChoice(
        technologies || [],
        props.specialistTechnologies
    )

    const dispatch = useAppDispatch()
    const {handleSubmit} = useForm({mode: 'onBlur'})

    const patchData: IData = {technologies: []}

    const selectTechnology = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            patchData.technologies.push(e.target.value)
        } else {
            patchData.technologies = patchData.technologies.filter(
                (technology) => technology !== e.target.value
            )
        }
    }

    const submit = () => {
        addTechnologies(patchData, token || '')
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
                {technologiesForAdding.map((value, pk) => {
                    return (
                        <FormControlLabel
                            control={<Checkbox value={value} onChange={selectTechnology}/>}
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

export default SpecialistTechnologiesGroup

const styles = {
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}