export interface ISpecialistProject {
    id: number
    name: string
    githubName: string
    version: string
    type: string
    rating: number
    github: string
}

export interface ISpecialist {
    id: number
    nickname: string
    githubNickname: string
    direction: string
    rating: number
    languages: string[]
    technologies: string[]
    currentProject: ISpecialistProject
    projects: ISpecialistProject[]
    selfProjects: ISpecialistProject[]
    email: string
    github: string
    name: string
    surname: string
    age: number
    about: string
    country: string
    city: string
}

export interface ISpecialistWithToken extends ISpecialist {
    token: string
}