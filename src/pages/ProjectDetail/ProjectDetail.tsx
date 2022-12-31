import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import SideBar from 'components/common/SideBar/SideBar'
import ProjectInfoBlock from 'components/projectBlocks/ProjectInfoBlock/ProjectInfoBlock'
import DescriptionBlock from 'components/projectBlocks/DescriptionBlock/DescriptionBlock'
import ProjectLanguagesBlock
    from 'components/projectBlocks/ProjectLanguagesBlock/ProjectLanguagesBlock'
import ProjectTechnologiesBlock
    from 'components/projectBlocks/ProjectTechnologiesBlock/ProjectTechnologiesBlock'
import TeammatesBlock from 'components/projectBlocks/TeammatesBlock/TeammatesBlock'
import {useRetrieveProject} from 'hooks/project'
import {useAppSelector} from 'store/config'
import {SIDE_BAR_ITEMS} from 'const/components'

const ProjectDetail: FC = () => {
    const {projectId} = useParams()
    const {data, getProject} = useRetrieveProject()

    const {updateConfigurationData} = useAppSelector(state => state.commonReducer)

    useEffect(() => {
        getProject(Number(projectId))
    }, [updateConfigurationData])

    return (
        <Box sx={styles.main}>
            <Box>
                <SideBar items={SIDE_BAR_ITEMS}/>
            </Box>
            <Box sx={styles.content}>
                {data && <ProjectInfoBlock project={data} isEditable={false}/>}

                {data?.description && <DescriptionBlock description={data.description}/>}

                {data && data.languages.length !== 0 &&
                    <ProjectLanguagesBlock
                        projectId={data.id}
                        projectLanguages={data.languages}
                        isEditable={false}
                    />
                }

                {data && data.technologies.length !== 0 &&
                    <ProjectTechnologiesBlock projectId={data.id}
                                              projectTechnologies={data.technologies}
                                              isEditable={false}
                    />
                }

                {data && data.team.length !== 0 &&
                    <TeammatesBlock specialists={data.team} isEditable={false}/>}
            </Box>
        </Box>
    )
}

export default ProjectDetail

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
    content: {
        width: '100%'
    }
}