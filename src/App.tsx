import React from "react";
import "./App.css";

import FlowEditor from "./components/FlowEditor";
import DocumentList from "./components/DocumentList";
import Connected from "./components/Connected";
import { ModeSelect } from "./components/ModeSelect";

const App: React.FC = () => {
  return (
    <>
      <h1 id="logo" className="logo">
        Flow
      </h1>
      <ModeSelect />
      <DocumentList />
      <Connected connected="⚡️" disconnected="offline" />
      <FlowEditor />
    </>
  );
};

export default App;
