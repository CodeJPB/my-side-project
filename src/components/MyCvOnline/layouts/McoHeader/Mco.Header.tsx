import { IMcoMainInformation } from "./../../MyCvOnline.model";
import "./Mco.Header.scss";

const RCN = "mco__header";

interface McoHeaderProps extends IMcoMainInformation {}

export const McoHeader: React.FC<McoHeaderProps> = ({
  firstName,
  lastName,
}) => (
  <div className={RCN}>
    <h1>Welcome to my cv online !</h1>
    <h2>
      My name is {firstName} <b>{lastName}</b>, it's a pleasure to meet you.
    </h2>
  </div>
);
