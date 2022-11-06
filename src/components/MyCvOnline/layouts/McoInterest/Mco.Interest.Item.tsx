import { IMcoInterest } from "./../../MyCvOnline.model";
import "./Mco.Interest.Item.scss";

const RCN = "mco__interest__item";

export const McoInterestItem: React.FC<IMcoInterest> = ({ title }) => (
  <div key={title} className={RCN} role="listitem">
    {title}
  </div>
);
