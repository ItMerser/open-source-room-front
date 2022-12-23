import * as yup from 'yup'

export const signInSchema = yup.object({
  nickname: yup.string().required('Field nickname is required'),
  password: yup.string().required('Field password is required').min(8, 'At least 8 characters')
})

export const signUpSchema = yup.object({
  githubNickname: yup.string().required('Field github nickname is required'),
  direction: yup.string().required('Field direction is required')
}).concat(signInSchema)