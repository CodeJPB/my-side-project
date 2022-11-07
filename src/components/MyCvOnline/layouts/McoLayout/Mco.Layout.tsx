import React from "react";
import "./Mco.Layout.scss";

const RCN = "mco__layout";

interface McoLayoutProps {
  header: React.ReactNode;
  sections: React.ReactNode[];
  footer: React.ReactNode;
}

export const McoLayout: React.FC<McoLayoutProps> = ({
  header,
  sections,
  footer,
}) => (
  <div className={RCN}>
    <div className={`${RCN}__header`}>{header}</div>
    <div className={`${RCN}__section`}>
      {sections.map((el) => (
        <div className={`${RCN}__section_item`}>{el} </div>
      ))}
    </div>
    <div className={`${RCN}__footer`}>{footer}</div>
  </div>
);
