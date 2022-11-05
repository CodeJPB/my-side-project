import { CvLanguage } from "../MyCvOnline.model";
import "./LanguageItem.css";

export const LanguageItem: React.FC<CvLanguage> = ({ title }) => (
  <div role="listitem" key={title} className="language-item">
    {title}
  </div>
);

export default LanguageItem;
