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
    UPDATE_SPECIALIST = '/specialists/updating',
    ADD_LANGUAGES_TO_SPECIALIST = '/specialists/languages/adding',
    REMOVE_SPECIALIST_LANGUAGES = '/specialists/languages/deletion',
    ADD_TECHNOLOGIES_TO_SPECIALIST = '/specialists/technologies/adding',
    REMOVE_SPECIALIST_TECHNOLOGIES = '/specialists/technologies/deletion',

    PROJECTS = '/projects',
    CREATE_PROJECT = '/projects/creation'
}