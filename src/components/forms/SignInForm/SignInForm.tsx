import React, {FC, Dispatch, useEffect} from 'react'
import {Box, Button, FormControl, FormHelperText, TextField} from '@mui/material'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {ISignInForm} from 'models/types/forms'
import {signInSchema} from 'models/validation/schemas'
import {useAuthenticateSpecialist} from 'hooks/specialists'
import {BACKGROUND_COLOR, ERROR_MESSAGE_COLOR, TEXT_COLOR} from 'const/styles'
import {login} from 'utils/auth'

interface Props {
    setAuthState: Dispatch<boolean>
}

const SignInForm: FC<Props> = (props) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        setError
    } = useForm({mode: 'onBlur', resolver: yupResolver(signInSchema)})
    const {data, error, authenticate} = useAuthenticateSpecialist()

    const submit = (formData: ISignInForm) => {
        authenticate(formData)
    }

    useEffect(() => {
        if (error) {
            setError(
                'common',
                {type: 'custom', message: `Invalid authentication data`}
            )
        }
    }, [error])

    useEffect(() => {
        if (data) {
            login(data)
            props.setAuthState(true)
        }
    }, [data])

    return (
        <form onSubmit={handleSubmit(submit)} style={styles.form}>
            <FormHelperText sx={styles.commonErrorMessage}>
                {errors.common ? `${errors.common.message}` : ''}
            </FormHelperText>

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
            <Box sx={styles.submitButton}>
                <Button type="submit">SIGN IN</Button>
            </Box>
        </form>
    )
}

export default SignInForm

const styles = {
    form: {
        width: '30vw',
        borderRadius: '2rem',
        padding: '1rem',
        margin: '2rem',
        backgroundColor: BACKGROUND_COLOR,
        border: `2px solid ${TEXT_COLOR}`
    },
    input: {
        backgroundColor: BACKGROUND_COLOR
    },
    errorMessage: {
        color: ERROR_MESSAGE_COLOR
    },
    commonErrorMessage: {
        color: ERROR_MESSAGE_COLOR,
        textAlign: 'center'
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}