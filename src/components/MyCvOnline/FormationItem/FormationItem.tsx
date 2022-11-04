import { Formation } from "../../../models/cv.model";
import "./Formation.css";

export const FormationItem: React.FC<Formation> = ({ title }) => (
  <li key={title} className="formation-item">
    {title}
  </li>
);

export default FormationItem;
