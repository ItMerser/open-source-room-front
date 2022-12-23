import React, {FC, useEffect} from 'react'
import {Box, Grid} from '@mui/material'
import SideBar from 'components/common/SideBar/SideBar'
import SpecialistCard from 'components/cards/SpecialistCard/SpecialistCard'
import {SIDE_BAR_ITEMS} from 'const/components'
import {useListSpecialists} from 'hooks/specialists'

const Specialists: FC = () => {
    const {data, getSpecialists} = useListSpecialists()

    useEffect(() => {
        getSpecialists()
    }, [])

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>
            <Grid container direction="row" justifyContent="space-between" flexWrap="wrap">
                {data && data.map((s, pk) => {
                    return (
                        <Grid item md={6} sm={12} xs={12} key={pk}>
                            <SpecialistCard specialist={s}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Specialists

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
}