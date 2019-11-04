import { useState, useEffect } from "react";
import { EditorState } from "draft-js";

import PouchDB from "pouchdb";

enum LoadingState {
  Initialized = "initialized",
  Syncing = "syncing",
  Loaded = "loaded"
}

export const useDocument = () => {
  const [loadingState, setLoadingState] = useState(LoadingState.Initialized);
  const [currentDocument, setCurrentDocument] = useState<EditorState>(
    EditorState.createEmpty()
  );

  let db = new PouchDB("document");

  useEffect(() => {
    loadDocument("a");
    console.log(db.info());
    setLoadingState(LoadingState.Loaded);
  }, []);

  const loadDocument = (_id: string) => `get database`;

  const updateDocument = (body: EditorState) => {
    setLoadingState(LoadingState.Syncing);
    setCurrentDocument(body);
    setLoadingState(LoadingState.Loaded);
  };

  return { loadingState, currentDocument, updateDocument };
};
