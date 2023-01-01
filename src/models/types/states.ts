import {LOADING_STATE} from 'models/enums/common'
import {ISpecialist, ISpecialistWithToken} from 'models/types/specialist'
import {IProject} from 'models/types/project'

interface State {
    status: number | null
    error: object | null
    loading: LOADING_STATE
}

// Specialist States
export interface IListSpecialistsState extends State {
    data: ISpecialist[] | null
}

export interface IRetrieveSpecialistState extends State {
    data: ISpecialist | null
}

export interface ICreateSpecialistState extends State {
    data: ISpecialistWithToken | null
}

export interface IAuthenticateSpecialistState extends State {
    data: ISpecialistWithToken | null
}

export interface IUpdateSpecialistState extends State {
    data: null
}

export interface IAddLanguagesToSpecialistState extends State {
    data: null
}

export interface IRemoveSpecialistLanguagesState extends State {
    data: null
}

export interface IAddTechnologiesToSpecialistState extends State {
    data: null
}

export interface IRemoveSpecialistTechnologiesState extends State {
    data: null
}

// Project States
export interface IListProjectsState extends State {
    data: IProject[] | null
}

export interface IRetrieveProjectState extends State {
    data: IProject | null
}

export interface IUpdateProjectsState extends State {
    data: null
}

export interface ICreateProjectsState extends State {
    data: IProject | null
}

export interface IDeleteProjectsState extends State {
    data: {deletedProjectPk: number} | null
}

export interface IAddLanguagesToProjectState extends State {
    data: null
}

export interface IRemoveProjectLanguagesState extends State {
    data: null
}

export interface IAddTechnologiesToProjectState extends State {
    data: null
}

export interface IRemoveProjectTechnologiesState extends State {
    data: null
}

export interface ITakePartInOwnProjectState extends State {
    data: null
}