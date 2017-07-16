import React, {Component} from 'react'

import './FlowEditor.css'
import '../../node_modules/draft-js/dist/Draft.css'

import {
  Editor,
  EditorState,
  RichUtils,
  // convertFromRaw,
  // convertToRaw
} from 'draft-js'

import BlockStyleControls from './BlockStyleControls'
import InlineStyleControls from './InlineStyleControls'

import { observer } from 'mobx-react'
import { observable } from 'mobx'

const state = observable({
  test: 'one'
})



// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
}

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote'
    default: return null
  }
}


class FlowEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  _click = () => {
    console.log(state)
    this.refs.editor.focus()
  }

  onChange = (editorState) => this.setState({editorState})

  handleKeyCommand = (command) => {
    const {editorState} = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  onTab = (e) => {
    const maxDepth = 4
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
  }

  toggleBlockType = (blockType) => {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    )
  }

  toggleInlineStyle = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    )
  }


  render() {
    return (
      <div className='documentWrapper'>
        <div className="group">
          <input type="text" placeholder='title' />
          <span className="highlight"></span>
          <span className="bar"></span>
        </div>
        <div onClick={this._click} className='editorWrapper'>
          {{
            write: <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder='Write Ready to get in the flow...'
              ref='editor'
              spellCheck={false}
            />,
            edit:
              <div>
                <div>
                  TK List
                </div>
                <Editor
                  handleKeyCommand={this.handleKeyCommand}
                  onTab={this.onTab}
                  blockStyleFn={getBlockStyle}
                  customStyleMap={styleMap}
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  placeholder='Nothing to edit'
                  ref='editor'
                  spellCheck={true}
                />
              </div>,
            format: <div>
              <BlockStyleControls
                editorState={this.state.editorState}
                onToggle={this.toggleBlockType}
              />
              <InlineStyleControls
                editorState={this.state.editorState}
                onToggle={this.toggleInlineStyle}
              />
              <Editor
                handleKeyCommand={this.handleKeyCommand}
                onTab={this.onTab}
                blockStyleFn={getBlockStyle}
                customStyleMap={styleMap}
                editorState={this.state.editorState}
                onChange={this.onChange}
                placeholder='Nothing to format'
                ref='editor'
                spellCheck={false}
              />
            </div>
          }[this.props.mode]}
        </div>
      </div>
    )
  }
}

export default FlowEditor
