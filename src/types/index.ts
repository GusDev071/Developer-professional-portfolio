export type Project = {
    id: number,
    name: string,
    technologies: string[],
    description: {
        es: string;
        en: string;
    },
    image: string,
    state: {
        es: string;
        en: string;
    },
    url: string,
}
