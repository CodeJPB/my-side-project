import { IMcoExperiment } from "./../../MyCvOnline.model";
import "./Mco.Experiment.Item.scss";

const RCN = "mco__experiment__item";

export const McoExperimentItem: React.FC<IMcoExperiment> = ({
  title,
  from,
  to,
  description,
  employer,
}) => (
  <div key={title} className={RCN} role="listitem">
    <h2>{title}</h2>
    <h3>{employer}</h3>
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
);
