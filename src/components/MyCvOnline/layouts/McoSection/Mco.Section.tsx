import { PropsWithChildren } from "react";
import "./Mco.Section.scss";

const RCN = "mco__section";

interface McoSectionProps extends PropsWithChildren {
  title: string;
}

export const McoSection: React.FC<McoSectionProps> = ({ title, children }) => (
  <section role="group" className={RCN}>
    <h2>{title}</h2>
    <div>{children}</div>
  </section>
);
