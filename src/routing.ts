export enum PAGE {
    HOME = '/',
    AUTHENTICATION = '/authentication',

    SPECIALISTS = '/specialists',
    PROFILE = '/specialists/:specialistId/profile',
    RESUME = '/specialists/:specialistId/resume',

    PROJECTS = '/projects',
}

export enum API {
    LANGUAGES = '/languages',
    TECHNOLOGIES = '/technologies',

    SPECIALISTS = '/specialists',
    RETRIEVE_SPECIALIST = '/specialists/:specialistId',
    CREATE_SPECIALIST = '/specialists/creation',
    AUTHENTICATE_SPECIALIST = '/specialists/authentication',

    PROJECTS = '/projects'
}