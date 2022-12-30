import {ITechnology} from 'models/types/common'

export const languagesForChoice = (allLanguages: string[], existsLanguages: string[]): string[] => {
    return allLanguages.filter((language) => !existsLanguages.includes(language))
}

export const technologiesForChoice = (
    allTechnologies: ITechnology[],
    specialistTechnologies: string[]
): string[] => {
    const technologyNames = allTechnologies.map(tech => tech.name)
    return technologyNames.filter((tech) => !specialistTechnologies.includes(tech))
}