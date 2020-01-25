import React, { useState, useContext, createContext, useEffect } from "react";
import { v4 } from "uuid";
import { EditorState } from "draft-js";

import PouchDB from "pouchdb";

interface IDocumentContext {
  documents: IDocument[];
  currentDocument: IDocument | undefined;
  setCurrentDocument(documentID: string): void;
  createDocument(title: string): void;
  updateDocument(document: IDocument): void;
  deleteDocument(document: IDocument): void;
}
export interface IDocument {
  _id: string;
  _rev: string;
  title: string;
  tags: string[];
  body: EditorState;
}
const DocumentContext = createContext<IDocumentContext | undefined>(undefined);

const DocumentProvider: React.FC = props => {
  const [documents, setDocuments] = useState<IDocument[]>([]);
  const [currentDocument, _setCurrentDocument] = useState<
    IDocument | undefined
  >(undefined);

  const db = new PouchDB<IDocument>("documents");

  useEffect(() => {
    const _dbAllDocuments = async () => {
      try {
        const result = await db.allDocs({
          include_docs: true
        });
        return result.rows.map(d => d.doc);
      } catch (e) {
        console.error(e);
      }
    };

    const _dbClose = async () => {
      try {
        await db.close();
      } catch (e) {
        console.error(e);
      }
    };

    (async () => {
      const data = await _dbAllDocuments();
      if (!data) return;
      if (data.length === 0) return;
      console.log(data);
      // @ts-ignore
      setDocuments(data);
    })();
    return () => {
      (async () => await _dbClose())();
    };
  }, [db]);

  const _dbDeleteDocument = async (document: IDocument) => {
    if (!document._rev) return;
    try {
      await db.remove(document);
    } catch (e) {
      console.error(e);
    }
  };

  interface createDoc {
    title: string;
    _id: string;
    tags: string[];
    body: EditorState;
  }

  const _dbCreateDocument = async (doc: createDoc) => {
    console.log("doc", doc);
    try {
      // @ts-ignore
      return await db.put(doc);
    } catch (e) {
      console.error(e);
    }
  };

  const _dbUpdateDocument = async (document: IDocument) => {
    try {
      db.put(document);
    } catch (e) {
      console.error(e);
    }
  };

  const _dbGet = async (id: string) => {
    try {
      return await db.get(id);
    } catch (e) {
      console.error(e);
    }
  };

  const setCurrentDocument = (documentID: string) => {
    (async () => {
      const result = await _dbGet(documentID);
      if (!result) return;
      _setCurrentDocument(result);
    })();
  };

  const createDocument = (title: string) => {
    console.log("title", title);
    const newDocument = {
      _id: v4(),
      title,
      tags: [],
      body: EditorState.createEmpty()
    };
    (async () => {
      const result = await _dbCreateDocument(newDocument);
      setDocuments(d => [{ ...newDocument, _rev: result._rev }, ...d]);
    })();
  };
  const updateDocument = (document: IDocument) => {
    (async () => {
      await _dbUpdateDocument(document);
    })();
    setDocuments([
      document,
      ...documents.filter(doc => doc._id !== document._id)
    ]);
  };
  const deleteDocument = (document: IDocument) => {
    (async () => {
      await _dbDeleteDocument(document);
    })();

    if (currentDocument && currentDocument._id === document._id)
      _setCurrentDocument(undefined);
    setDocuments(documents.filter(doc => doc._id !== document._id));
  };

  return (
    <DocumentContext.Provider
      value={{
        documents,
        currentDocument,
        setCurrentDocument,
        createDocument,
        updateDocument,
        deleteDocument
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
