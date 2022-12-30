import React, {FC, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import SideBar from 'components/common/SideBar/SideBar'
import ProjectInfoBlock from 'components/block/ProjectInfoBlock/ProjectInfoBlock'
import DescriptionBlock from 'components/block/DescriptionBlock/DescriptionBlock'
import ProjectLanguagesBlock
    from 'components/block/ProjectLanguagesBlock/ProjectLanguagesBlock'
import ProjectTechnologiesBlock
    from 'components/block/ProjectTechnologiesBlock/ProjectTechnologiesBlock'
import {useRetrieveProject} from 'hooks/project'
import {useAppSelector} from 'store/config'
import {SIDE_BAR_ITEMS} from 'const/components'

const ProjectConfiguration: FC = () => {
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
                {data && <ProjectInfoBlock project={data} showEmptyValues={true}/>}

                {data && <DescriptionBlock description={data.description}/>}

                {data && <ProjectLanguagesBlock projectId={data.id}
                                                projectLanguages={data.languages}
                                                isAddable={true}/>
                }

                {data && <ProjectTechnologiesBlock projectId={data.id}
                                                   projectTechnologies={data.technologies}
                                                   isAddable={true}/>
                }
            </Box>
        </Box>
    )
}

export default ProjectConfiguration

const styles = {
    main: {
        display: 'flex',
        minHeight: '87vh',
    },
    content: {
        width: '100%'
    }
}