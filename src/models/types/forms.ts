export interface ISignInForm {
    nickname?: string
    password?: string
}

export interface ISignUpForm extends ISignInForm {
    githubNickname?: string,
    direction?: string
}