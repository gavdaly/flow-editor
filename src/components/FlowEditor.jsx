import React, {Component} from 'react'

import './FlowEditor.css'
import '../../node_modules/draft-js/dist/Draft.css'

import {
  Editor,
  EditorState,
  // convertFromRaw,
  // convertToRaw
} from 'draft-js'

import { observer } from 'mobx-react'
import { observable } from 'mobx'

const state = observable({
  test: 'one'
})

class FlowEditor extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }
  _click = () => {
    console.log(state)
    this.refs.editor.focus()
  }

  onChange = (editorState) => this.setState({editorState})

  render() {
    return (
      <div className='documentWrapper'>
        <input placeholder='title' />
        <div onClick={this._click} className='editorWrapper'>
          {{
            write: <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder='Write Ready to get in the flow...'
              ref='editor'
            />,
            edit: <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder='Nothing to edit'
              ref='editor'
            />,
            format: <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              placeholder='Nothing to format'
              ref='editor'
            />
          }[this.props.mode]}
        </div>
      </div>
    )
  }
}

export default FlowEditor
