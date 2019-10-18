import React, { useState, useContext, createContext } from "react";

export enum Mode {
  Write = "write",
  Edit = "edit",
  Format = "format"
}

interface IUIContext {
  mode: Mode;
  currentDocumentID: string;
  setMode: (mode: Mode) => void;
  setCurrentDocumentID: (id: string) => void;
}

const UIContext = createContext<IUIContext | undefined>(undefined);

const UIProvider: React.FC = props => {
  const [mode, setMode] = useState<Mode>(Mode.Write);
  const [currentDocumentID, setCurrentDocumentID] = useState<string>("-1");

  return (
    <UIContext.Provider
      value={{ mode, currentDocumentID, setMode, setCurrentDocumentID }}
      {...props}
    />
  );
};

const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined)
    throw new Error("Context must be used in Provider");
  return context;
};

export { UIProvider, useUI };
