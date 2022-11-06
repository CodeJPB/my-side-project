import { IMcoProps } from "./MyCvOnline.model";
import {
  McoHeader,
  McoLanguages,
  McoInterest,
  McoFormation,
  McoExperiment,
  McoLayout,
} from "./layouts";

export const MyCvOnline: React.FC<IMcoProps> = ({
  main,
  experiments,
  formations,
  languages,
  interests,
}) => (
  <McoLayout>
    <McoHeader {...main} />
    <McoExperiment data={experiments} />
    <McoFormation data={formations} />
    <McoLanguages data={languages} />
    <McoInterest data={interests} />
  </McoLayout>
);
