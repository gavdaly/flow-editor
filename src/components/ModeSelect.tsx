import * as React from "react";
import { useUI } from "../hooks/UIContext";
import { Mode } from "../Types";

export const ModeSelect: React.FC = () => {
  const { setMode } = useUI();
  return (
    <section id="modeSelect">
      <button onClick={() => setMode(Mode.Write)}>write</button>
      <button onClick={() => setMode(Mode.Edit)}>edit</button>
      <button onClick={() => setMode(Mode.Format)}>format</button>
    </section>
  );
};
