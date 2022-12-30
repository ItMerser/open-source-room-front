import * as yup from 'yup'

export const signInSchema = yup.object({
    nickname: yup.string().required('Field nickname is required'),
    password: yup.string().required('Field password is required').min(8, 'At least 8 characters')
})

export const signUpSchema = yup.object({
    githubNickname: yup.string().required('Field github nickname is required'),
    direction: yup.string().required('Field direction is required')
}).concat(signInSchema)

export const updateSpecialistSchema = yup.object({
    nickname: yup.string(),
    githubNickname: yup.string(),
    bornDate: yup.string(),
    direction: yup.string(),
    email: yup.string().email(),
    github: yup.string().url(),
    name: yup.string(),
    surname: yup.string(),
    country: yup.string(),
    city: yup.string()
})

export const createProjectSchema = yup.object({
    name: yup.string().required('Field name is required'),
    githubName: yup.string().required('Field github name is required'),
    isPrivate: yup.boolean(),
    type: yup.string().required('Field type is required'),
    github: yup.string().url()
})

export const updateProjectSchema = yup.object({
    name: yup.string(),
    githubName: yup.string(),
    type: yup.string(),
    version: yup.string(),
    github: yup.string()
})