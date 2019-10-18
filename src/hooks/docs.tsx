import { IDocument } from "./documentContext";
import { EditorState } from "draft-js";

export const docs: IDocument[] = [
  {
    title: "Indian Camp",
    _id: "1",
    tags: ["first", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "The Sun Also Rises",
    _id: "2",
    tags: ["second", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "A Farewell to Arms",
    _id: "3",
    tags: ["third", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "Death in the Afternoon",
    _id: "4",
    tags: ["fourth", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "Green Hills of Africa",
    _id: "5",
    tags: ["fifth", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "For Whom the Bell Tolls",
    _id: "6",
    tags: ["sixth", "hemmingway"],
    body: EditorState.createEmpty()
  },
  {
    title: "The Old Man and the Sea",
    _id: "7",
    tags: ["seventh", "hemmingway"],
    body: EditorState.createEmpty()
  }
];
