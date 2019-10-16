import React from "react";
import "./App.css";

import FlowEditor from "./components/FlowEditor";
import DocumentList from "./components/DocumentList";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <div id="a" className="a">
        <SideBar />
        <DocumentList />
        <FlowEditor />
      </div>
    </div>
  );
};

export default App;
