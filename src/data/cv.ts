import { Cv } from "../models/cv.model";

export const cv : Cv = {
    firstName: "Jean-Pascal",
    lastName: "Bontemps",
    email: "jpb-code@gmail.com",
    formations: [
        {
            from : new Date(),
            to: new Date(),
            title: "BTS Optique à Paris",
            graduation: "BAC +2",
            description: "Ipsum lorem",
            school: "Saint thomas"
        }
    ],
    experiments: [
        {
            from : new Date(),
            to: new Date(),
            title: "Opticien chez Optic 2000",
            employer: "Optic 2000",
            description: "Ipsum lorem"
        }
    ],
    interests: ["clean surfaces"],
    languages: ["Français"],
    about: "Ipsum lorem"
}