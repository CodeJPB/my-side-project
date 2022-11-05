import { CvInterest } from "../MyCvOnline.model";
import "./InterestItem.css";

export const InterestItem: React.FC<CvInterest> = ({ title }) => (
  <div role="listitem" key={title} className="Interest-item">
    {title}
  </div>
);

export default InterestItem;
