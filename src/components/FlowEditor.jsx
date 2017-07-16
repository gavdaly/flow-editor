import React, {Component} from 'react'

import './FlowEditor.css'
import '../../node_modules/draft-js/dist/Draft.css'

import {
  Editor,
  EditorState,
  // convertFromRaw,
  // convertToRaw
} from 'draft-js'



class FlowEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
    this.onChange = (editorState) => this.setState({editorState})
  }
  _click = () => {
    this.refs.editor.focus()
  }


  render() {
    return (
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
    )
  }
}

export default FlowEditor
