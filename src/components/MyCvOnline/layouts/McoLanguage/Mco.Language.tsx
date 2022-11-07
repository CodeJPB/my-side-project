import { McoSection, McoLanguageItem } from "./..";
import { McoSectionName } from "../../MyCvOnline.constant";
import { IMcoLanguage } from "../../MyCvOnline.model";

interface McoLanguageProps {
  data: IMcoLanguage[];
}

export const McoLanguage: React.FC<McoLanguageProps> = ({ data }) => (
  <McoSection title={McoSectionName.LANGUAGES}>
    {data.map((d) => (
      <McoLanguageItem key={d.title} {...d} />
    ))}
  </McoSection>
);
