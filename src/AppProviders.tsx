import React, { ReactNode } from "react";

import { DocumentProvider } from "./hooks/useDocuments";

interface IProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: IProps) => (
  <DocumentProvider>{children}</DocumentProvider>
);
export default AppProviders;
