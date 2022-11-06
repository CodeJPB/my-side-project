import { EMcoLanguage } from "./MyCvOnline.constant";

export interface IMcoProps {
    main: IMcoMainInformation;
    experiments: IMcoExperiment[];
    formations: IMcoFormation[];
    languages: IMcoLanguage[];
    interests: IMcoInterest[];
}

export interface IMcoMainInformation {
    firstName: string;
    lastName: string;
    email: string;
    about: string;
    imgUrl?:string;
    available: boolean;
}

export interface IMcoFormation {
    title: string;
    from : Date;
    to: Date;
    description: string;
    graduation: string;
    school: string;  
}

export interface IMcoExperiment {
    title: string;
    from : Date;
    to: Date;
    description: string;
    employer: string;
}

export type IMcoLanguage = {
    title: EMcoLanguage;
}

export type IMcoInterest = {
    title: string;
    img?: string;
}