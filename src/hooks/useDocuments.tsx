import React, { useState, useContext, createContext } from "react";

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
}

const DocumentContext = createContext<Partial<IDocumentContext>>({});

const DocumentProvider: React.FC = props => {
  const [documents, setDocuments] = useState<IDocument[]>([]);

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

  return (
    <DocumentContext.Provider
      value={{ documents, updateDocument, deleteDocument }}
      {...props}
    />
  );
};

const useDocument = () => useContext(DocumentContext);

export { DocumentProvider, useDocument };
