import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

class FlowEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
      <div style={{width: '100%'}}>
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
      </div>
    );
  }
}

export default FlowEditor
