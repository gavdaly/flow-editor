import React, { useState, useContext, createContext } from "react";

export enum Mode {
  Write = "write",
  Edit = "edit",
  Format = "format"
}

interface IUIContext {
  mode: Mode;
  currentDocumentID: number;
  setMode: (mode: Mode) => void;
  setCurrentDocumentID: (id: number) => void;
}

const defaults = {
  mode: Mode.Write,
  currentDocumentID: -1,
  setMode: (mode: Mode) => {},
  setCurrentDocumentID: (id: number) => {}
};

const UIContext = createContext<IUIContext>(defaults);

const UIProvider: React.FC = props => {
  const [mode, setMode] = useState<Mode>(Mode.Write);
  const [currentDocumentID, setCurrentDocumentID] = useState<number>(0);

  return (
    <UIContext.Provider
      value={{ mode, currentDocumentID, setMode, setCurrentDocumentID }}
      {...props}
    />
  );
};

const useUI = () => useContext(UIContext);

export { UIProvider, useUI };
