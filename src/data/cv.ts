import { Cv, ECvLanguage } from "../components/MyCvOnline/MyCvOnline.model";

export const cv: Cv = {
  firstName: "Jean-Pascal",
  lastName: "Bontemps",
  email: "jpb-code@gmail.com",
  experiments : [
    {
        title: "Opticien chez Optic 2000",
      from: new Date(),
      to: new Date(),
      employer: "Optic 2000",
      description: "Ipsum lorem",
    },
  ],
  formations: [
    {
        title: "BTS Optique à Paris",
      from: new Date(),
      to: new Date(),
      graduation: "BAC +2",
      description: "Ipsum lorem",
      school: "Saint thomas",
    },
  ],
  languages: [
    { title: ECvLanguage.FR }
  ],
  interests: [
    { title: "clean code" }
  ],
  about: "Ipsum lorem",
};
