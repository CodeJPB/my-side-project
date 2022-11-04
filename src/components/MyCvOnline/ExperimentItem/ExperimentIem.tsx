import { Experiment } from "../../../models/cv.model";
import "./Experiment.css";

export const ExperimentItem: React.FC<Experiment> = ({ title }) => (
  <li key={title} className="experiment-item">
    {title}
  </li>
);

export default ExperimentItem;
