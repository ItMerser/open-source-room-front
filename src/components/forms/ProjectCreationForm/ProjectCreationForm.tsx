import React, {FC, useEffect, useState, ChangeEvent} from 'react'
import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    MenuItem,
    TextField,
    FormControlLabel,
    Switch
} from '@mui/material'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {createProjectSchema} from 'models/validation/schemas'
import {IProjectCreationForm} from 'models/types/forms'
import {useCreateProject} from 'hooks/project'
import {useAppDispatch, useAppSelector} from 'store/config'
import {setUpdateProfileData} from 'store/slices/commonSlice'
import {addOwnProject} from 'store/slices/specialistSlice'
import {PROJECT_TYPES} from 'const/common'
import {ISpecialistProject} from 'models/types/specialist'
import {IProject} from 'models/types/project'
import {ERROR_MESSAGE_COLOR, BACKGROUND_COLOR} from 'const/styles'

interface Props {
    closeForm: () => void
}

const sprintOwnProject = (project: IProject): ISpecialistProject => {
    const {id, name, githubName, type, version, rating, github}: ISpecialistProject = project
    return {id, name, githubName, type, version, rating, github}
}

const ProjectCreationForm: FC<Props> = (props) => {
    const {data, status, error, create} = useCreateProject()
    const {token} = useAppSelector(state => state.specialistReducer)
    const [isPrivate, setIsPrivate] = useState<boolean>(false)

    const switchPrivate = (e: ChangeEvent<HTMLInputElement>) => setIsPrivate(e.target.checked)

    const dispatch = useAppDispatch()

    const {
        register,
        formState: {errors},
        handleSubmit,
        setError,
        watch
    } = useForm({mode: 'onBlur', resolver: yupResolver(createProjectSchema)})

    const projectType = watch<string>('type', PROJECT_TYPES[0])

    const submit = (formData: IProjectCreationForm) => {
        formData.isPrivate = isPrivate
        create(formData, token || '')
    }

    useEffect(() => {
        if (data) {
            props.closeForm()
            dispatch(addOwnProject(sprintOwnProject(data)))
            dispatch(setUpdateProfileData())
        }
    }, [data])

    useEffect(() => {
        if (error) {
            for (const [field, errorMessage] of Object.entries(error)) {
                setError(field, {type: 'custom', message: errorMessage})
            }
        }
    }, [error])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Name"
                    margin="normal"
                    sx={styles.input}
                    {...register('name')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.name ? `${errors.name.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Github name"
                    margin="normal"
                    sx={styles.input}
                    {...register('githubName')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.githubName ? `${errors.githubName.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControlLabel
                control={<Switch checked={isPrivate} onChange={switchPrivate}/>}
                label="IS PRIVATE"
            />

            <FormControl variant="filled" fullWidth>
                <TextField
                    select
                    label="Project type"
                    margin="normal"
                    value={projectType}
                    sx={styles.input}
                    {...register('type')}
                >
                    {PROJECT_TYPES.map((type, pk) => {
                        return (
                            <MenuItem value={type} key={pk}>{type}</MenuItem>
                        )
                    })}
                </TextField>
                <FormHelperText sx={styles.errorMessage}>
                    {errors.type ? `${errors.type.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Github"
                    margin="normal"
                    sx={styles.input}
                    {...register('github')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.github ? `${errors.github.message}` : ''}
                </FormHelperText>
            </FormControl>

            <Box sx={styles.submitButton}>
                <Button type="submit">CREATE</Button>
            </Box>
        </form>
    )
}

export default ProjectCreationForm

const styles = {
    input: {
        backgroundColor: BACKGROUND_COLOR
    },
    errorMessage: {
        color: ERROR_MESSAGE_COLOR
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}