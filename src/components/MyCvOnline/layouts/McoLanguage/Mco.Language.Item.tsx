import { IMcoLanguage } from "./../../MyCvOnline.model";
import "./Mco.Language.Item.scss";

const RCN = "mco__interest__item";

export const McoLanguageItem: React.FC<IMcoLanguage> = ({ title }) => (
  <div key={title} className={RCN} role="listitem">
    {title}
  </div>
);
