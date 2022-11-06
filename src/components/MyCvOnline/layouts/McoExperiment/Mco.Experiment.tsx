import { McoSection, McoExperimentItem } from "./..";
import { IMcoExperiment } from "./../../MyCvOnline.model";
import { McoSectionName } from "./../../MyCvOnline.constant";

interface McoExperimentProps {
  data: IMcoExperiment[];
}

export const McoExperiment: React.FC<McoExperimentProps> = ({ data }) => (
  <McoSection title={McoSectionName.EXPERIMENTS}>
    {data.map((d) => (
      <McoExperimentItem key={d.title} {...d} />
    ))}
  </McoSection>
);
