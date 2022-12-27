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

const Resume: FC = () => {
    const {specialistId} = useParams()
    const {data: specialist, getSpecialist} = useRetrieveSpecialist()

    useEffect(() => {
        getSpecialist(Number(specialistId))
    }, [])

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>

            <Box sx={styles.content} id="resume">
                {specialist && <SpecialistInfoBlock specialist={specialist} showEmptyValues={false}/>}

                {specialist?.about && <AboutBlock about={specialist.about}/>}

                {specialist?.languages.length !== 0 &&
                    <SpecialistLanguagesBlock specialistLanguages={specialist?.languages || []}/>
                }

                {specialist?.selfProjects.length !== 0 &&
                    <SpecialistTechnologiesBlock specialistTechnologies={specialist?.technologies || []}/>
                }

                {specialist?.projects.length !== 0 &&
                    <ProjectsBlock title="PROJECTS" projects={specialist?.projects || []}/>
                }

                {specialist?.selfProjects.length !== 0 &&
                    <ProjectsBlock title="SELF PROJECTS" projects={specialist?.selfProjects || []}/>
                }
            </Box>
        </Box>
    )
}

export default Resume

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
    content: {
        width: '100%'
    }
}