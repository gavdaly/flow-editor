import React, { useState } from "react";
import "./App.css";

import { IDocument, Mode } from "./hooks/useDocuments";
import { docs } from "./hooks/docs";

import FlowEditor from "./components/FlowEditor";
import DocumentList from "./components/DocumentList";
import SideBar from "./components/SideBar";

const App: React.FC = () => {
  const [documents, setDocuments] = useState<IDocument[]>(docs);
  const [mode, setMode] = useState<Mode>(Mode.Write);
  const [currentDocument, setCurrentDocument] = useState<IDocument>();

  const handleDocumentSelect = (id: number) => {
    if (!documents) return [];
    const newCurrent = documents.find(doc => doc.id === id);
    setCurrentDocument(newCurrent);
  };

  return (
    <div className="App">
      <div id="a" className="a">
        <SideBar selectMode={setMode} />
        <DocumentList
          documents={documents}
          currentDocument={currentDocument}
          selectedDocument={handleDocumentSelect}
        />
        <FlowEditor mode={mode} currentDocument={currentDocument} />
      </div>
    </div>
  );
};

export default App;
