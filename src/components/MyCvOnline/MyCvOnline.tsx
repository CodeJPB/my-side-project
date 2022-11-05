import { Cv } from "./MyCvOnline.model";
import { CvSection } from "./CvSection/CvSection";
import { ExperimentItem } from "./ExperimentItem/ExperimentItem";
import { FormationItem } from "./FormationItem/FormationItem";
import { InterestItem } from "./InterestItem/InterestItem";
import { LanguageItem } from "./LanguageItem/LanguageItem";
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
    <div>
      <CvSection title="Experiments">
        {cv.experiments.map((d) => (
          <ExperimentItem key={d.title} {...d} />
        ))}
      </CvSection>
      <CvSection title="Formations">
        {cv.formations.map((d) => (
          <FormationItem key={d.title} {...d} />
        ))}
      </CvSection>
      <CvSection title="Languages">
        {cv.languages.map((d) => (
          <LanguageItem key={d.title} {...d} />
        ))}
      </CvSection>
      <CvSection title="Interests">
        {cv.interests.map((d) => (
          <InterestItem key={d.title} {...d} />
        ))}
      </CvSection>
    </div>
  </section>
);

export default MyCvOnline;
