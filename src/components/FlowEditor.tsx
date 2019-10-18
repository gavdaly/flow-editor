import React from "react";

import "./FlowEditor.css";
import "../../node_modules/draft-js/dist/Draft.css";

import { useUI } from "../hooks/UIContext";
import { useDocument } from "../hooks/documentContext";

import {
  Editor,
  EditorState,
  RichUtils
  // convertFromRaw,
  // convertToRaw
} from "draft-js";

import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";

export const FlowEditor: React.FC = () => {
  const { mode } = useUI();
  const { currentDocument, updateDocument, updateBody } = useDocument();
  const editorState = currentDocument.body || EditorState.createEmpty();

  // const handleKeyCommand = (command: string) => {
  //   const newState = RichUtils.handleKeyCommand(editorState, command);
  //   if (newState) {
  //     setEditorState(newState);
  //   }
  // };

  const onTab = (e: any) => {
    const maxDepth = 4;
    updateBody(RichUtils.onTab(e, editorState, maxDepth));
  };

  const toggleBlockType = (blockType: any) => {
    updateBody(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: any) => {
    updateBody(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const updateEditor = (a: EditorState) => {
    updateBody(a);
  };

  return (
    <div className="documentWrapper">
      <div className="group">
        <input
          type="text"
          placeholder="title"
          value={currentDocument.title}
          onChange={event => {
            updateDocument({ ...currentDocument, title: event.target.value });
          }}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </div>
      <div className="editorWrapper">
        {
          {
            write: (
              <Editor
                editorState={editorState}
                onChange={updateEditor}
                placeholder="Write Ready to get in the flow..."
                // ref="editor"
                spellCheck={false}
              />
            ),
            edit: (
              <div>
                <div>TK List</div>
                <Editor
                  // handleKeyCommand={handleKeyCommand}
                  onTab={onTab}
                  editorState={editorState}
                  onChange={updateEditor}
                  placeholder="Nothing to edit"
                  // ref="editor"
                  spellCheck={true}
                />
              </div>
            ),
            format: (
              <div>
                <BlockStyleControls
                  editorState={editorState}
                  onToggle={toggleBlockType}
                />
                <InlineStyleControls
                  editorState={editorState}
                  onToggle={toggleInlineStyle}
                />
                <Editor
                  // handleKeyCommand={handleKeyCommand}
                  onTab={onTab}
                  editorState={editorState}
                  onChange={updateEditor}
                  placeholder="Nothing to format"
                  // ref="editor"
                  spellCheck={false}
                />
              </div>
            )
          }[mode]
        }
      </div>
    </div>
  );
};

export default FlowEditor;
