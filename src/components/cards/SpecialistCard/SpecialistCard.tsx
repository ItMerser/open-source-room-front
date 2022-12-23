import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {Card, Breadcrumbs, Typography, CardActions, Box} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import GitHubIcon from '@mui/icons-material/GitHub'
import {ISpecialist} from 'models/types/specialist'
import {BACKGROUND_COLOR, TEXT_COLOR} from 'const/styles'

interface Props {
    specialist: ISpecialist
}

const SpecialistCard: FC<Props> = (props) => {
    return (
        <Card sx={styles.card}>
            <Breadcrumbs separator={<Typography variant="h5" sx={styles.separator}>/</Typography>}>
                <Typography component={Link} to="" variant="h5" sx={styles.text}>
                    {props.specialist.nickname}
                </Typography>
                <Typography component={Link} to="" variant="h5" sx={styles.text}>
                    <GitHubIcon sx={styles.githubIcon}/>
                    {props.specialist.githubNickname}
                </Typography>
            </Breadcrumbs>
            <Box sx={styles.infoBlock}>
                <Typography variant="h6" component="div" sx={styles.text}>
                    {props.specialist.direction}
                </Typography>
                <Typography variant="h6" component="div" sx={styles.text}>
                    rating {props.specialist.rating}
                </Typography>
            </Box>
            <CardActions sx={styles.cardActions}>
                <Typography
                    component={Link}
                    to=""
                    sx={styles.text}
                >
                    DETAIL
                </Typography>
                <Box>
                    <FavoriteIcon sx={styles.favoriteIcon}/>
                </Box>
            </CardActions>
        </Card>
    )
}

export default SpecialistCard

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        padding: '1rem',
        background: BACKGROUND_COLOR
    },
    text: {
        textDecoration: 'none',
        color: TEXT_COLOR
    },
    infoBlock: {
        marginBottom: '1rem'
    },
    cardActions: {
        padding: 0,
        display: 'flex',
        justifyContent: 'space-between'
    },
    favoriteIcon: {
        fill: TEXT_COLOR
    },
    separator: {
        color: TEXT_COLOR
    },
    githubIcon: {
        marginRight: '0.5rem'
    }
}