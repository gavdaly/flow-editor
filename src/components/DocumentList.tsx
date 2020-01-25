import React, { useState } from "react";

import { useDocument } from "../hooks/documentsContext";

import "./DocumentList.css";

import DocumentItem from "./DocumentItem";

export const DocumentList: React.FC = () => {
  const { documents, createDocument } = useDocument();

  const [filterString, setFilterString] = useState("");

  return (
    <div id="documentList" className="documentList">
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
            />
          ))}
      </div>
      <button onClick={() => createDocument(`${new Date()}`)}>
        Create New Document
      </button>
    </div>
  );
};

export default DocumentList;
