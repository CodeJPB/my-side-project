import { McoSection, McoInterestItem } from "./..";
import { McoSectionName } from "./../../MyCvOnline.constant";
import { IMcoInterest } from "./../../MyCvOnline.model";

interface McoInterestsProps {
  data: IMcoInterest[];
}

export const McoInterest: React.FC<McoInterestsProps> = ({ data }) => (
  <McoSection title={McoSectionName.INTERESTS}>
    {data.map((d) => (
      <McoInterestItem key={d.title} {...d} />
    ))}
  </McoSection>
);
