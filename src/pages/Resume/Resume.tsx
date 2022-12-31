import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import SpecialistInfoBlock from 'components/specialistBlocks/SpecialistInfoBlock/SpecialistInfoBlock'
import AboutBlock from 'components/specialistBlocks/AboutBlock/AboutBlock'
import SpecialistLanguagesBlock
    from 'components/specialistBlocks/SpecialistLanguagesBlock/SpecialistLanguagesBlock'
import SpecialistTechnologiesBlock
    from 'components/specialistBlocks/SpecialistTechnologiesBlock/SpecialistTechnologiesBlock'
import ProjectsBlock from 'components/specialistBlocks/ProjectsBlock/ProjectsBlock'
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
                {specialist && <SpecialistInfoBlock specialist={specialist} isEditable={false}/>}

                {specialist?.about && <AboutBlock about={specialist.about}/>}

                {specialist && specialist.languages.length !== 0 &&
                    <SpecialistLanguagesBlock specialistLanguages={specialist.languages}
                                              isEditable={false}/>
                }

                {specialist && specialist.ownProjects.length !== 0 &&
                    <SpecialistTechnologiesBlock specialistTechnologies={specialist.technologies}
                                                 isEditable={false}/>
                }

                {specialist && specialist.projects.length !== 0 &&
                    <ProjectsBlock title="PROJECTS" projects={specialist?.projects}
                                   isEditable={false}/>
                }

                {specialist && specialist.ownProjects.length !== 0 &&
                    <ProjectsBlock title="OWN PROJECTS" projects={specialist.ownProjects}
                                   isEditable={false}/>
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