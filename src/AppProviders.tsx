import React, { ReactNode } from "react";

import { DocumentProvider } from "./hooks/documentContext";
import { UIProvider } from "./hooks/UIContext";

interface IProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: IProps) => (
  <UIProvider>
    <DocumentProvider>{children}</DocumentProvider>
  </UIProvider>
);
export default AppProviders;
