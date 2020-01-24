import * as React from "react";

import { DocumentProvider } from "./hooks/documentsContext";
import { UIProvider } from "./hooks/UIContext";

export const AppProviders: React.FC = ({ children }) => (
  <UIProvider>
    <DocumentProvider>{children}</DocumentProvider>
  </UIProvider>
);
export default AppProviders;
