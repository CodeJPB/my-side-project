import { PropsWithChildren } from "react";
import "./Mco.Section.scss";

interface McoSectionProps extends PropsWithChildren {
  title: string;
}

export const McoSection: React.FC<McoSectionProps> = ({ title, children }) => (
  <section role="group" className="my-cv-online__section">
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);
