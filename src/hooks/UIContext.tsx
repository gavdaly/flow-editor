import React, { useState, useContext, createContext } from "react";

import { Mode } from "../Types";

interface IUIContext {
  mode: Mode;
  isTyping: boolean;
  setMode: (mode: Mode) => void;
  registerMouse: () => void;
  registerKeyboard: () => void;
}

const UIContext = createContext<IUIContext | undefined>(undefined);

const UIProvider: React.FC = props => {
  const [mode, setMode] = useState<Mode>(Mode.Write);
  const [isTyping, setIsTyping] = useState(false);

  const registerMouse = () => {
    setIsTyping(false);
  };

  const registerKeyboard = () => {
    setIsTyping(true);
  };

  return (
    <UIContext.Provider
      value={{ mode, setMode, isTyping, registerMouse, registerKeyboard }}
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
