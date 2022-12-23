import React, {FC, useEffect} from 'react'
import {Box, Grid} from '@mui/material'
import SideBar from 'components/common/SideBar/SideBar'
import ProjectCard from 'components/cards/ProjectCard/ProjectCard'
import {SIDE_BAR_ITEMS} from 'const/components'
import {useListProjects} from 'hooks/project'

const Projects: FC = () => {
    const {data, getProjects} = useListProjects()

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>
            <Grid container direction="row" justifyContent="space-between" flexWrap="wrap">
                {data && data.map((p, pk) => {
                    return (
                        <Grid item md={6} sm={12} xs={12} key={pk}>
                            <ProjectCard project={p}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Projects

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
}
