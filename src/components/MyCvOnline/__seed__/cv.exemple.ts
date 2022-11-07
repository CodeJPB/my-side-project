import { EMcoLanguage } from "../MyCvOnline.constant";
import { IMcoProps } from "../MyCvOnline.model";

export const cvExemple: IMcoProps = {
  main: {
    firstName: "Jean-Pascal",
    lastName: "Bontemps",
    email: "jpb-code@gmail.com",
    about: "Ipsum lorem",
    available: true,
  },
  experiments: [
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
    {
      title: "BTS Optique à Paris",
      from: new Date(),
      to: new Date(),
      graduation: "BAC +2",
      description: "Ipsum lorem",
      school: "Saint thomas",
    },
  ],
  languages: [{ title: EMcoLanguage.FR }],
  interests: [{ title: "clean code" }],
};
