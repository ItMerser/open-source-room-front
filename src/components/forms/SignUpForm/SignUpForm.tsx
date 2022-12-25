import React, {FC, Dispatch, useEffect} from 'react'
import {Box, Button, FormControl, FormHelperText, MenuItem, TextField} from '@mui/material'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {Direction} from 'models/enums/specialist'
import {useCreateSpecialist} from 'hooks/specialists'
import {ISignUpForm} from 'models/types/forms'
import {signUpSchema} from 'models/validation/schemas'
import {ERROR_MESSAGE_COLOR, BACKGROUND_COLOR} from 'const/styles'
import {login} from 'utils/auth'

interface Props {
    setAuthState: Dispatch<boolean>
}

const directions = Object.values(Direction)

const SignUpForm: FC<Props> = (props) => {
    const {data: createdSpecialist, error, registrate} = useCreateSpecialist()

    const {
        register,
        formState: {errors},
        handleSubmit,
        watch,
        setError,
    } = useForm({mode: 'onBlur', resolver: yupResolver(signUpSchema)})

    const direction = watch<string>('direction', Direction.BACKEND)

    const submit = (formData: ISignUpForm) => {
        registrate(formData)
    }

    useEffect(() => {
        if (error) {
            for (const [field, errorMessage] of Object.entries(error)) {
                setError(field, {type: 'custom', message: errorMessage})
            }
        }
    }, [error])

    useEffect(() => {
        if (createdSpecialist) {
            login(createdSpecialist.id, createdSpecialist.nickname, createdSpecialist.token)
            props.setAuthState(true)
        }
    }, [createdSpecialist])

    return (
        <form onSubmit={handleSubmit(submit)} style={styles.form}>
            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Nickname"
                    margin="normal"
                    sx={styles.input}
                    {...register('nickname')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.nickname ? `${errors.nickname.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Github nickname"
                    margin="normal"
                    sx={styles.input}
                    {...register('githubNickname')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.githubNickname ? `${errors.githubNickname.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    sx={styles.input}
                    {...register('password')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.password ? `${errors.password.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="filled" fullWidth>
                <TextField
                    select
                    label="Direction"
                    margin="normal"
                    value={direction}
                    sx={styles.input}
                    {...register('direction')}
                >
                    {directions.map((value, pk) => {
                        return (
                            <MenuItem value={value} key={pk}>{value}</MenuItem>
                        )
                    })}
                </TextField>
                <FormHelperText sx={styles.errorMessage}>
                    {errors.direction ? `${errors.direction.message}` : ''}
                </FormHelperText>
            </FormControl>

            <Box sx={styles.submitButton}>
                <Button type="submit">SIGN UP</Button>
            </Box>
        </form>
    )
}

export default SignUpForm

const styles = {
    form: {
        width: '30vw',
        borderRadius: '2rem',
        padding: '1rem',
        margin: '2rem',
        backgroundColor: 'white',
        border: `2px solid ${BACKGROUND_COLOR}`
    },
    input: {
        backgroundColor: 'white'
    },
    errorMessage: {
        color: ERROR_MESSAGE_COLOR
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}