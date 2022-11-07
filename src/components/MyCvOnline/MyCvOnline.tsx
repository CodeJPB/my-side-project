import { IMcoProps } from "./MyCvOnline.model";
import {
  McoHeader,
  McoLanguage,
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
  <McoLayout
    header={<McoHeader {...main} />}
    sections={[
      <McoExperiment data={experiments} />,
      <McoFormation data={formations} />,
      <McoLanguage data={languages} />,
      <McoInterest data={interests} />,
    ]}
    footer={null}
  />
);
