import { IMcoFormation } from "./../../MyCvOnline.model";
import "./Mco.Formation.Item.scss";

const RCN = "mco__formation__item";

export const McoFormationItem: React.FC<IMcoFormation> = ({
  title,
  from,
  to,
  description,
  graduation,
  school,
}) => (
  <div key={title} className={RCN} role="listitem">
    <h2>{title}</h2>
    <h3>
      {school} / {graduation}
    </h3>
    <div>
      <div className={`${RCN}__block`}>
        <label>From:</label>
        <span>{from.toDateString()}</span>
      </div>
      <div className={`${RCN}__block`}>
        <label>To:</label>
        <span>{to.toDateString()}</span>
      </div>
      <div className={`${RCN}__block`}>
        <label>description</label>
        <span>{description}</span>
      </div>
    </div>
  </div>
);
