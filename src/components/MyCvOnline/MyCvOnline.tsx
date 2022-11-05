import { Cv } from "../../models/cv.model";
import { ExperimentItem } from "./ExperimentItem/ExperimentItem";
import { FormationItem } from "./FormationItem/FormationItem";
import { SectionItem } from "./SectionItem/SectionItem";
import "./MyCvOnline.css";

interface MyCvOnlineProps {
  cv: Cv;
}

export const MyCvOnline: React.FC<MyCvOnlineProps> = ({ cv }) => (
  <section className="my-cv-online">
    <h1>Welcome to my cv online !</h1>
    <h2>
      My name is {cv.firstName} <b>{cv.lastName}</b>, it's a pleasure to meet
      you.
    </h2>
    <SectionItem title="Experiments">
      {cv.experiments.map((d) => (
        <ExperimentItem key={d.title} {...d} />
      ))}
    </SectionItem>
    <SectionItem title="Formations">
      {cv.formations.map((d) => (
        <FormationItem key={d.title} {...d} />
      ))}
    </SectionItem>
    <SectionItem title="Languages">
      {cv.languages.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </SectionItem>
    <SectionItem title="Interests">
      {cv.interests.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </SectionItem>
  </section>
);

export default MyCvOnline;
