import { McoSection, McoFormationItem } from "..";
import { IMcoFormation } from "./../../MyCvOnline.model";
import { McoSectionName } from "./../../MyCvOnline.constant";

interface McoFormationProps {
  data: IMcoFormation[];
}

export const McoFormation: React.FC<McoFormationProps> = ({ data }) => (
  <McoSection title={McoSectionName.FORMATIONS}>
    {data.map((d) => (
      <McoFormationItem key={d.title} {...d} />
    ))}
  </McoSection>
);
