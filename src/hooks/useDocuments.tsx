import { useState, useContext } from "react";

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
