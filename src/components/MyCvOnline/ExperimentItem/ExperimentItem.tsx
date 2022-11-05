import { CvExperiment } from "../MyCvOnline.model";
import "./ExperimentItem.css";

export const ExperimentItem: React.FC<CvExperiment> = ({
  title,
  from,
  to,
  description,
  employer,
}) => (
  <div role="listitem" key={title} className="experiment-item">
    <h2>{title}</h2>
    <h3>{employer}</h3>
    <div>
      <div className="experiment-item__block">
        <label>From:</label>
        <span>{from.toDateString()}</span>
      </div>
      <div className="experiment-item__block">
        <label>To:</label>
        <span>{to.toDateString()}</span>
      </div>
      <div className="experiment-item__block">
        <label>description</label>
        <span>{description}</span>
      </div>
    </div>
  </div>
);

export default ExperimentItem;
