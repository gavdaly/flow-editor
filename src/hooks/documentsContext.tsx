import React, { useState, useContext, createContext, useEffect } from "react";
import uuidv4 from "uuid/v4";

import { IDocumentMeta } from "../Types";

import PouchDB from "pouchdb";

interface IDocumentContext {
  documents: IDocumentMeta[];
  currentDocumentID: string;
  updateMeta: (document: IDocumentMeta) => void;
  deleteDocument: (documentID: string) => void;
  createDocument: () => void;
}

const DocumentContext = createContext<IDocumentContext | undefined>(undefined);

const DocumentProvider: React.FC = props => {
  const [documents, setDocuments] = useState<IDocumentMeta[]>([]);
  const [currentDocumentID] = useState("");

  const docs = new PouchDB("documents");
  const meta = new PouchDB("meta");

  useEffect(() => {
    updateDocuments();

    docs.changes({ since: "now", live: true }).on("change", () => {});

    meta
      .changes({
        since: "now",
        live: true
      })
      .on("change", updateDocuments);
  }, [docs, meta]);

  function updateDocuments() {
    // (async () => {
    //   const results = await db.allDocs({
    //     include_docs: true,
    //     descending: true
    //   });
    //   setDocuments(
    //     results.rows.map(({ _id, title, tags }: any) => {
    //       return { _id, title, tags };
    //     })
    //   );
    // })();
  }

  // useEffect(() => {
  //   const d = documents.find(doc => doc._id === currentDocumentID);
  //   if (d) {
  //     setCurrentDocument(d);
  //   }
  // }, [currentDocumentID, documents]);

  function updateMeta(meta: IDocumentMeta) {
    // db.put(document);
    setDocuments(
      documents.map(doc => {
        if (doc._id === meta._id) return meta;
        return doc;
      })
    );
  }

  function deleteDocument(documentID: string) {
    setDocuments(documents.filter(doc => doc._id !== documentID));
  }

  function createDocument() {
    const uuid = uuidv4();
    createEmptyMeta(uuid);
    createEmptyDoc(uuid);
  }

  function createEmptyMeta(uuid: string) {}
  function createEmptyDoc(uuid: string) {}

  return (
    <DocumentContext.Provider
      value={{
        documents,
        currentDocumentID,
        updateMeta,
        deleteDocument,
        createDocument
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
