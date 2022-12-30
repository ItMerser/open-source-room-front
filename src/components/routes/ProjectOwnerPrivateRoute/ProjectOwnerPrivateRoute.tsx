import React, {FC} from 'react'
import {Navigate, Outlet, useParams} from 'react-router-dom'
import {PAGE} from 'routing'
import {useAppSelector} from 'store/config'
import {ISpecialistProject} from 'models/types/specialist'

const projectMatches = (projects: ISpecialistProject[], target: number): number => {
    return projects.filter((project) => project.id === target).length
}

const ProjectOwnerPrivateRoute: FC = () => {
    const {projectId} = useParams()
    const {ownProjects} = useAppSelector(state => state.specialistReducer)

    if (ownProjects && projectMatches(ownProjects, Number(projectId)) === 1) {
        return <Outlet/>
    } else {
        return <Navigate to={PAGE.AUTHENTICATION}/>
    }
}

export default ProjectOwnerPrivateRoute