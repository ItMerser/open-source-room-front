import React, {FC, useEffect, useState} from 'react'
import {Box, Button, FormControl, FormHelperText, MenuItem, TextField} from '@mui/material'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import dayjs, {Dayjs} from 'dayjs'
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from '@mui/x-date-pickers/DatePicker'
import {updateSpecialistSchema} from 'models/validation/schemas'
import {ISpecialistUpdatingForm} from 'models/types/forms'
import {useUpdateSpecialist} from 'hooks/specialists'
import {useAppDispatch, useAppSelector} from 'store/config'
import {ERROR_MESSAGE_COLOR, TEXT_COLOR} from 'const/styles'
import {DIRECTIONS} from 'const/common'
import {ISpecialist} from 'models/types/specialist'
import {setUpdateProfileData} from 'store/slices/commonSlice'

interface Props {
    specialist: ISpecialist
    closeForm: () => void
}

const currentYear = new Date().getFullYear()
const minBornDate = `${currentYear - 8}-01-01`

const UpdateSpecialistDataForm: FC<Props> = (props) => {
    const {status, error, update} = useUpdateSpecialist()
    const {token} = useAppSelector(state => state.specialistReducer)
    const [newBornDate, setNewBornDate] = useState<Dayjs | null>(null)

    const dispatch = useAppDispatch()

    const {
        register,
        formState: {errors},
        handleSubmit,
        setError,
        watch
    } = useForm({mode: 'onBlur', resolver: yupResolver(updateSpecialistSchema)})

    const nickname = watch<string>('nickname', props.specialist.nickname)
    const githubNickname = watch<string>('githubNickname', props.specialist.githubNickname)
    const direction = watch<string>('direction', props.specialist.direction)
    const email = watch<string>('email', props.specialist.email)
    const github = watch<string>('github', props.specialist.github)
    const name = watch<string>('name', props.specialist.name)
    const surname = watch<string>('surname', props.specialist.surname)
    const country = watch<string>('country', props.specialist.country)
    const city = watch<string>('city', props.specialist.city)

    const submit = (formData: ISpecialistUpdatingForm) => {
        if (!formData.bornDate) {
            delete formData.bornDate
        }
        update(formData, token || '')
    }

    useEffect(() => {
        if (status === 200) {
            props.closeForm()
            dispatch(setUpdateProfileData())
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
                    label="Nickname"
                    margin="normal"
                    value={nickname}
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
                    value={githubNickname}
                    sx={styles.input}
                    {...register('githubNickname')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.githubNickname ? `${errors.githubNickname.message}` : ''}
                </FormHelperText>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Born date"
                    value={newBornDate}
                    inputFormat="YYYY-MM-DD"
                    maxDate={dayjs(minBornDate)}
                    mask="____-__-__"
                    onChange={(newDate: Dayjs | null) => {
                        setNewBornDate(newDate)
                    }}
                    renderInput={(params) => {
                        params = {...params, ...register('bornDate')}
                        return <TextField {...params} />
                    }}
                />
            </LocalizationProvider>

            <FormControl variant="filled" fullWidth>
                <TextField
                    select
                    label="Direction"
                    margin="normal"
                    value={direction}
                    sx={styles.input}
                    {...register('direction')}
                >
                    {DIRECTIONS.map((value, pk) => {
                        return (
                            <MenuItem value={value} key={pk}>{value}</MenuItem>
                        )
                    })}
                </TextField>
                <FormHelperText sx={styles.errorMessage}>
                    {errors.direction ? `${errors.direction.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    type="email"
                    label="Email"
                    margin="normal"
                    value={email}
                    sx={styles.input}
                    {...register('email')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.email ? `${errors.email.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    type="url"
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
                    label="Surname"
                    margin="normal"
                    value={surname}
                    sx={styles.input}
                    {...register('surname')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.surname ? `${errors.surname.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="Country"
                    margin="normal"
                    value={country}
                    sx={styles.input}
                    {...register('country')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.country ? `${errors.country.message}` : ''}
                </FormHelperText>
            </FormControl>

            <FormControl variant="outlined" fullWidth>
                <TextField
                    label="City"
                    margin="normal"
                    value={city}
                    sx={styles.input}
                    {...register('city')}
                />
                <FormHelperText sx={styles.errorMessage}>
                    {errors.city ? `${errors.city.message}` : ''}
                </FormHelperText>
            </FormControl>

            <Box sx={styles.submitButton}>
                <Button type="submit">UPDATE</Button>
            </Box>
        </form>
    )
}

export default UpdateSpecialistDataForm

const styles = {
    input: {
        backgroundColor: TEXT_COLOR
    },
    errorMessage: {
        color: ERROR_MESSAGE_COLOR
    },
    submitButton: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}