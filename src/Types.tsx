import { EditorState } from "draft-js";

export enum Mode {
  Write = "write",
  Edit = "edit",
  Format = "format"
}

export interface IDocument {
  _id: string;
  body?: EditorState;
}

export interface IDocumentMeta {
  _id: string;
  tags: string[];
  title: string;
}
