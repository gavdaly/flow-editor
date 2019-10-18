import React, { useState } from "react";

import { useDocument } from "../hooks/documentContext";
import { useUI } from "../hooks/UIContext";

import "./DocumentList.css";

import DocumentItem from "./DocumentItem";

export const DocumentList: React.FC = () => {
  const { documents } = useDocument();
  const { setCurrentDocumentID } = useUI();

  const [filterString, setFilterString] = useState("");

  return (
    <div className="documentList">
      <input
        onChange={event => setFilterString(event.target.value)}
        value={filterString}
      />
      <div>
        {documents &&
          documents.map(doc => (
            <DocumentItem
              key={doc._id}
              title={doc.title}
              tags={doc.tags}
              id={doc._id}
              onDocumentSelected={(id: string) => setCurrentDocumentID(id)}
            />
          ))}
      </div>
    </div>
  );
};

export default DocumentList;
