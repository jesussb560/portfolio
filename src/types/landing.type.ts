export type JobStep = {
    label: string;
    description: string;
    projects: StepProject[];
}

export type StepProject = {
    title: string;
    workplace: string;
    description: string;
    image?: string;
    url?: string,
    technologies: string[];
}