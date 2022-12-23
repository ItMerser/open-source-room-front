import {Direction} from 'models/enums/specialist'
import {ProjectType} from 'models/enums/project'

export interface IProjectSpecialist {
    id: number
    nickname: string
    githubNickname: string
    direction: Direction
    rating: number
    github: string
}

export interface IProject {
    id: number
    name: string
    githubName: string
    description: string
    version: string
    type: ProjectType
    startDate: Date
    rating: number
    github: string
    languages: string[]
    technologies: string[]
    team: IProjectSpecialist[]
    owner: IProjectSpecialist
}