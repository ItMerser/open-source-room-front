import React, {FC, useEffect} from 'react'
import {Box, Button, FormControl, FormHelperText, MenuItem, TextField} from '@mui/material'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {updateProjectSchema} from 'models/validation/schemas'
import {IProjectUpdatingForm} from 'models/types/forms'
import {useUpdateProject} from 'hooks/project'
import {useAppDispatch, useAppSelector} from 'store/config'
import {setUpdateConfigurationData} from 'store/slices/commonSlice'
import {IProject} from 'models/types/project'
import {PROJECT_TYPES} from 'const/common'
import {BACKGROUND_COLOR, ERROR_MESSAGE_COLOR} from 'const/styles'

interface Props {
    project: IProject
    closeForm: () => void
}

const ProjectUpdatingForm: FC<Props> = (props) => {
    const {status, error, update} = useUpdateProject()
    const {token} = useAppSelector(state => state.specialistReducer)

    const dispatch = useAppDispatch()

    const {
        register,
        formState: {errors},
        handleSubmit,
        setError,
        watch
    } = useForm({mode: 'onBlur', resolver: yupResolver(updateProjectSchema)})

    const name = watch<string>('name', props.project.name)
    const githubName = watch<string>('githubName', props.project.githubName)
    const type = watch<string>('type', props.project.type)
    const version = watch<string>('version', props.project.version)
    const github = watch<string>('github', props.project.github)

    const submit = (formData: IProjectUpdatingForm) => {
        update(formData, props.project.id, token || '')
    }

    useEffect(() => {
        if (status === 200) {
            props.closeForm()
            dispatch(setUpdateConfigurationData())
        }
    }, [status])

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
                    value={name}
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
                    value={githubName}
                    sx={styles.input}
                    {...register('githubName')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.githubName ? `${errors.githubName.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="filled" fullWidth>
                <TextField
                    select
                    label="Project type"
                    margin="normal"
                    value={type}
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
                    label="Version"
                    margin="normal"
                    value={version}
                    sx={styles.input}
                    {...register('version')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.version ? `${errors.version.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Github"
                    margin="normal"
                    value={github}
                    sx={styles.input}
                    {...register('github')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.github ? `${errors.github.message}` : ''}
                </FormHelperText>
            </FormControl>

            <Box sx={styles.submitButton}>
                <Button type="submit">UPDATE</Button>
            </Box>
        </form>
    )
}

export default ProjectUpdatingForm

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