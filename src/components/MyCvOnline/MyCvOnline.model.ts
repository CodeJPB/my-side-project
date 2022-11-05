export interface Cv {
    firstName: string;
    lastName: string;
    email: string;
    about: string;
    experiments: CvExperiment[];
    formations: CvFormation[];
    languages: CvLanguage[];
    interests: CvInterest[];
}


export interface CvFormation {
    title: string;
    from : Date;
    to: Date;
    description: string;
    graduation: string;
    school: string;
}

export interface CvExperiment {
    title: string;
    from : Date;
    to: Date;
    description: string;
    employer: string;
}



export enum ECvLanguage {
    EN = "Anglais",
    FR = "Français"
}

export type CvLanguage = {
    title: ECvLanguage;
}

export type CvInterest = {
    title: string;
    img?: string;
}
