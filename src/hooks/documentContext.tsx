import React, { useState, useContext, createContext, useEffect } from "react";
import { EditorState } from "draft-js";

import { useUI } from "./UIContext";

import { docs } from "./docs"; // temp add docs for the UI

export interface IDocument {
  title: string;
  id: number;
  tags: string[];
  body?: EditorState;
}

interface IDocumentContext {
  documents: IDocument[];
  currentDocument: IDocument;
  updateDocument: (document: IDocument) => void;
  updateBody: (body: EditorState) => void;
  deleteDocument: (documentID: number) => void;
  createDocument: () => IDocument;
}

const newDocument = {
  title: "",
  id: Date.now(),
  tags: [],
  body: EditorState.createEmpty()
};

const DocumentContext = createContext<IDocumentContext | undefined>(undefined);

const DocumentProvider: React.FC = props => {
  const { currentDocumentID } = useUI();
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const [currentDocument, setCurrentDocument] = useState<IDocument>(
    newDocument
  );

  useEffect(() => setDocuments(docs), []);

  useEffect(() => {
    if (documents) {
      const d = documents.find(doc => doc.id === currentDocumentID);
      console.log(d);
      if (d) {
        setCurrentDocument(d);
      }
    }
  }, [currentDocumentID, documents]);

  function updateDocument(document: IDocument) {
    setCurrentDocument(document);
    setDocuments(
      documents.map(doc => {
        if (doc.id === document.id) return document;
        return doc;
      })
    );
  }

  function updateBody(body: EditorState) {
    setCurrentDocument({ ...currentDocument, body });
  }

  function deleteDocument(documentID: number) {
    setDocuments(documents.filter(doc => doc.id !== documentID));
  }

  function createDocument() {
    setDocuments([...documents, newDocument]);
    return newDocument;
  }

  return (
    <DocumentContext.Provider
      value={{
        documents,
        updateDocument,
        updateBody,
        deleteDocument,
        createDocument,
        currentDocument
      }}
      {...props}
    />
  );
};

const useDocument = () => {
  const context = useContext(DocumentContext);
  if (context === undefined)
    throw new Error("Context must be used in Provider");
  return context;
};

export { DocumentProvider, useDocument };
