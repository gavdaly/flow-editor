import React from "react";

import Connected from "./Connected";

import "./SideBar.css";

import { Mode, useUI } from "../hooks/UIContext";

export const SideBar: React.FC = () => {
  const { setMode } = useUI();

  return (
    <aside id="sidebar" className="sidebar">
      <h1 className="logo">Flow</h1>
      <button onClick={() => setMode(Mode.Write)}>write</button>
      <button onClick={() => setMode(Mode.Edit)}>edit</button>
      <button onClick={() => setMode(Mode.Format)}>format</button>

      <div className="spacer"></div>
      <div>Settings</div>
      <footer>
        <Connected connected="⚡️" disconnected="offline" />
        <aside className="byline">by Gavin Daly</aside>
      </footer>
    </aside>
  );
};

export default SideBar;
