import {ProjectType} from 'models/enums/project'

export interface ISignInForm {
    nickname?: string
    password?: string
}

export interface ISignUpForm extends ISignInForm {
    githubNickname?: string,
    direction?: string
}

export interface ISpecialistUpdatingForm {
    nickname?: string,
    githubNickname?: string,
    bornDate?: Date
    direction?: string,
    email?: string,
    github?: string,
    name?: string,
    surname?: string,
    country?: string,
    city?: string
}

export interface IProjectCreationForm {
    name?: string
    githubName?: string
    isPrivate?: boolean
    type?: ProjectType
    github?: string
}

export interface IProjectUpdatingForm {
    name?: string
    githubName?: string
    type?: ProjectType
    version?: string
    github?: string
}