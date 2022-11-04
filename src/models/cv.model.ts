export interface Cv {
    firstName: string;
    lastName: string;
    email: string;
    formations: Formation[];
    experiments: Experiment[];
    interests: string[];
    languages: string[];
    about: string;
}

export interface Formation {
    from : Date;
    to: Date;
    title: string;
    description: string;
    graduation: string;
}

export interface Experiment {
    from : Date;
    to: Date;
    title: string;
    description: string;
    employer: string;
}
