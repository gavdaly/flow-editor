import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

const style = {
    width: '100%',
    padding: '2vmin'
  }


class FlowEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  _click = () => {
    this.refs.editor.focus()
  }
  render() {
    return (
      <div onClick={this._click} style={style}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          // placeholder='Ready to get in the flow...'
          ref='editor'
        />
      </div>
    );
  }
}

export default FlowEditor
