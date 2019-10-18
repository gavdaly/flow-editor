import React, { useState, useContext, createContext, useEffect } from "react";
import { EditorState } from "draft-js";

import PouchDB from "pouchdb";

import { useUI } from "./UIContext";

import { docs } from "./docs"; // temp add docs for the UI

export interface IDocument {
  title: string;
  _id: string;
  tags: string[];
  body?: EditorState;
}

interface IDocumentContext {
  documents: IDocument[];
  currentDocument: IDocument;
  updateDocument: (document: IDocument) => void;
  updateBody: (body: EditorState) => void;
  deleteDocument: (documentID: string) => void;
  createDocument: () => IDocument;
}

const newDocument = {
  title: "",
  _id: `${Date.now()}`,
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

  const db = new PouchDB("documents");

  useEffect(() => {
    updateDocuments();

    db.changes({
      since: "now",
      live: true
    }).on("change", updateDocuments);
  }, [db]);

  function updateDocuments() {
    (async () => {
      const results = await db.allDocs({
        include_docs: true,
        descending: true
      });

      setDocuments(
        results.rows.map(({ _id, title, tags }: any) => {
          return { _id, title, tags };
        })
      );
    })();
  }

  useEffect(() => {
    const d = documents.find(doc => doc._id === currentDocumentID);
    if (d) {
      setCurrentDocument(d);
    }
  }, [currentDocumentID, documents]);

  function updateDocument(document: IDocument) {
    db.put(document);
    setCurrentDocument(document);
    setDocuments(
      documents.map(doc => {
        if (doc._id === document._id) return document;
        return doc;
      })
    );
  }

  function updateBody(body: EditorState) {
    setCurrentDocument({ ...currentDocument, body });
  }

  function deleteDocument(documentID: string) {
    setDocuments(documents.filter(doc => doc._id !== documentID));
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
