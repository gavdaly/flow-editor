import React, { useState, useContext, createContext } from "react";

import { docs } from "./docs"; // temp add docs for the UI

export interface IDocument {
  title: string;
  id: number;
  tags: string[];
  body: string;
}

export enum Mode {
  Write = "write",
  Edit = "edit",
  Format = "format"
}

interface IDocumentContext {
  documents: IDocument[];
  updateDocument: (document: IDocument) => void;
  deleteDocument: (document: IDocument) => void;
  createDocument: () => IDocument;
}

const DocumentContext = createContext<Partial<IDocumentContext>>({});

const DocumentProvider: React.FC = props => {
  const [documents, setDocuments] = useState<IDocument[]>(docs);

  function updateDocument(document: IDocument) {
    setDocuments(
      documents.map(doc => {
        if (doc.id === document.id) return document;
        return doc;
      })
    );
  }

  function deleteDocument(document: IDocument) {
    setDocuments(documents.filter(doc => doc.id !== document.id));
  }

  function createDocument() {
    const newDocument = { title: "", id: Date.now(), tags: [], body: "" };
    setDocuments([...documents, newDocument]);
    return newDocument;
  }

  return (
    <DocumentContext.Provider
      value={{ documents, updateDocument, deleteDocument, createDocument }}
      {...props}
    />
  );
};

const useDocument = () => useContext(DocumentContext);

export { DocumentProvider, useDocument };
