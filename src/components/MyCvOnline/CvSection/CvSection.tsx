import { PropsWithChildren } from "react";
import "./CvSection.css";

interface CvSectionProps extends PropsWithChildren {
  title: string;
}

export const CvSection: React.FC<CvSectionProps> = ({ title, children }) => (
  <section role="group" className="my-cv-online__section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);

export default CvSection;
