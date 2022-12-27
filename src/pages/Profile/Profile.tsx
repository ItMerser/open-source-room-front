import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import ProfileMainInfoBlock from 'components/block/ProfileMainInfoBlock/ProfileMainInfoBlock'
import AboutBlock from 'components/block/AboutBlock/AboutBlock'
import LanguagesBlock from 'components/block/LanguagesBlock/LanguagesBlock'
import TechnologiesBlock from 'components/block/TechnologiesBlock/TechnologiesBlock'
import ProjectsBlock from 'components/block/ProjectsBlock/ProjectsBlock'
import SideBar from 'components/common/SideBar/SideBar'
import {SIDE_BAR_ITEMS} from 'const/components'
import {useRetrieveSpecialist} from 'hooks/specialists'
import {useAppSelector} from 'store/config'

const Profile: FC = () => {
    const {specialistId} = useParams()
    const {data: specialist, getSpecialist} = useRetrieveSpecialist()

    const {updateProfileData} = useAppSelector(state => state.commonReducer)

    useEffect(() => {
        getSpecialist(Number(specialistId))
    }, [updateProfileData])

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>

            <Box sx={styles.content}>
                {specialist && <ProfileMainInfoBlock specialist={specialist} showEmptyValues={true}/>}

                {specialist && <AboutBlock about={specialist.about}/>}

                {specialist && <LanguagesBlock languages={specialist.languages}/>}

                {specialist && <TechnologiesBlock technologies={specialist.technologies}/>}

                {specialist && <ProjectsBlock title="PROJECTS" projects={specialist.projects}/>}

                {specialist && <ProjectsBlock title="SELF PROJECTS" projects={specialist.selfProjects} isAddable={true}/>}
            </Box>
        </Box>
    )
}

export default Profile

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
    content: {
        width: '100%'
    }
}