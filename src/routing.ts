export enum PAGE {
    HOME = '/',
    AUTHENTICATION = '/authentication',

    SPECIALISTS = '/specialists',
    PROFILE = '/specialists/:specialistId/profile',
    RESUME = '/specialists/:specialistId/resume',

    PROJECTS = '/projects',
    PROJECT_CONFIGURATION = '/projects/:projectId/configuration'
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
    RETRIEVE_PROJECT = '/projects/:projectId',
    CREATE_PROJECT = '/projects/creation',
    UPDATE_PROJECT = '/projects/:projectId/updating',
    DELETE_PROJECT = '/projects/:projectId/deletion',
    ADD_LANGUAGES_TO_PROJECT = '/projects/:projectId/languages/adding',
    REMOVE_PROJECT_LANGUAGES = '/projects/:projectId/languages/deletion',
    ADD_TECHNOLOGIES_TO_PROJECT = '/projects/:projectId/technologies/adding',
    REMOVE_PROJECT_TECHNOLOGIES = '/projects/:projectId/technologies/deletion',
}