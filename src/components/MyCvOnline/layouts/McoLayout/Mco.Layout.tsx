import React, { PropsWithChildren } from "react";
import "./Mco.Layout.scss";

interface MyCvOnlineProps extends PropsWithChildren {
  children: React.ReactNode[];
}

export const McoLayout: React.FC<MyCvOnlineProps> = ({ children }) => (
  <div className="mco_layout">{children}</div>
);
