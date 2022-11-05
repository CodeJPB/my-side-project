import { Formation } from "../../../models/cv.model";
import "./FormationItem.css";

export const FormationItem: React.FC<Formation> = ({
  title,
  from,
  to,
  description,
  graduation,
  school,
}) => (
  <div role="listitem" key={title} className="formation-item">
    <h2>{title}</h2>
    <h3>
      {school} / {graduation}
    </h3>
    <div>
      <div className="formation-item__block">
        <label>From:</label>
        <span>{from.toDateString()}</span>
      </div>
      <div className="formation-item__block">
        <label>To:</label>
        <span>{to.toDateString()}</span>
      </div>
      <div className="formation-item__block">
        <label>description</label>
        <span>{description}</span>
      </div>
    </div>
  </div>
);

export default FormationItem;
