import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import SpecialistInfoBlock from 'components/block/SpecialistInfoBlock/SpecialistInfoBlock'
import AboutBlock from 'components/block/AboutBlock/AboutBlock'
import SpecialistLanguagesBlock from 'components/block/SpecialistLanguagesBlock/SpecialistLanguagesBlock'
import SpecialistTechnologiesBlock from 'components/block/SpecialistTechnologiesBlock/SpecialistTechnologiesBlock'
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
                {specialist && <SpecialistInfoBlock specialist={specialist} showEmptyValues={true}/>}

                {specialist && <AboutBlock about={specialist.about}/>}

                {specialist && <SpecialistLanguagesBlock specialistLanguages={specialist.languages} isAddable={true}/>}

                {specialist &&
                    <SpecialistTechnologiesBlock specialistTechnologies={specialist.technologies} isAddable={true}/>
                }

                {specialist && <ProjectsBlock title="PROJECTS" projects={specialist.projects}/>}

                {specialist &&
                    <ProjectsBlock title="OWN PROJECTS" projects={specialist.ownProjects} isEditable={true}/>
                }
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