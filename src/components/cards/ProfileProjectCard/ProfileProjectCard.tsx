import React, {FC, useState, useEffect} from 'react'
import {Button, Card, Typography, Box, Divider} from '@mui/material'
import {lightGreen} from '@mui/material/colors'
import GitHubIcon from '@mui/icons-material/GitHub'
import {Link} from 'react-router-dom'
import ConfirmDialog from 'components/helpers/ConfirmDialog/ConfirmDialog'
import {useDeleteProject} from 'hooks/project'
import {useAppSelector, useAppDispatch} from 'store/config'
import {setUpdateProfileData} from 'store/slices/commonSlice'
import {ISpecialistProject} from 'models/types/specialist'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    project: ISpecialistProject
    isEditable?: boolean
}

const ProfileProjectCard: FC<Props> = (props) => {
    const {status, deleteProject} = useDeleteProject()
    const {token} = useAppSelector(state => state.specialistReducer)
    const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    const changeConfirmDialogState = () => setIsOpenConfirmDialog(!isOpenConfirmDialog)

    const deleteProjectHandler = () => {
        deleteProject(props.project.id, token || '')
        changeConfirmDialogState()
    }

    useEffect(() => {
        if (status === 200) {
            dispatch(setUpdateProfileData())
        }
    }, [status])

    return (
        <Card variant="outlined" sx={styles.card}>
            <Typography variant="h6" sx={styles.info}>
                {props.project.name}
            </Typography>
            <Typography variant="h6" sx={styles.info}>
                <GitHubIcon fontSize="small" sx={styles.githubIcon}/>
                {props.project.githubName}
            </Typography>
            <Typography variant="h6" sx={styles.info}>{props.project.type}</Typography>
            <Typography variant="h6" sx={styles.info}>
                {props.project.version}
            </Typography>

            <Divider sx={styles.divider}/>

            <Box sx={styles.cardActions}>
                <Button
                    component={Link}
                    to=""
                    size="small"
                    sx={styles.button}
                >
                    DETAIL
                </Button>
                {props.isEditable &&
                    <Button sx={styles.button} onClick={changeConfirmDialogState}>
                        DELETE
                    </Button>
                }
            </Box>

            <ConfirmDialog
                isOpen={isOpenConfirmDialog}
                agreeResponse={deleteProjectHandler}
                disagreeResponse={changeConfirmDialogState}
                title="Do you really wanna delete this project"
                agreeButtonText="DELETE"
                disagreeButtonText="CANCEL"
            />
        </Card>
    )
}

export default ProfileProjectCard

const styles = {
    card: {
        margin: '1rem',
        backgroundColor: TEXT_COLOR,
        minHeight: '11rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    info: {
        textAlign: 'center',
        minHeight: '1.5rem',
        color: BACKGROUND_COLOR
    },
    divider: {
        width: '100%',
        borderColor: BACKGROUND_COLOR,
    },
    cardActions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    button: {
        color: lightGreen['A400']
    },
    githubIcon: {
        marginRight: '0.5rem'
    }
}