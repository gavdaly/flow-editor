import React, { Component } from 'react'
import './App.css'

import FlowEditor from './components/FlowEditor'
import DocumentList from './components/DocumentList'
import SideBar from './components/SideBar'

const documents = [
  { title: "Indian Camp", id: 1, tags: ['first', 'hemmingway'] },
  { title: "The Sun Also Rises", id: 2, tags: ['second', 'hemmingway'] },
  { title: "A Farewell to Arms", id: 3, tags: ['third', 'hemmingway'] },
  { title: "Death in the Afternoon", id: 4, tags: ['fourth', 'hemmingway'] },
  { title: "Green Hills of Africa", id: 5, tags: ['fifth', 'hemmingway'] },
  { title: "For Whom the Bell Tolls", id: 6, tags: ['sixth', 'hemmingway'] },
  { title: "The Old Man and the Sea", id: 7, tags: ['seventh', 'hemmingway'] }
]

const mode = 'write'


class App extends Component {
  state = {
    documents,
    mode,
    currentDocument: ''
  }
  handleDocumendSelect = (id) => {

  }
  handleModeSelect = (mode) => {
    this.setMode(mode)
  }
  setMode = (mode) => {
    this.setState({ mode })
  }
  render() {
    return (
      <div className="App">
        <div id='a' className='a'>
          <SideBar
            mode={this.state.mode}
            selectMode={this.handleModeSelect}
          />
          <DocumentList
            documents={this.state.documents}
            currentDocument={this.state.currentDocument}
            selectedDocument={this.handleDocumendSelect}
          />
          <FlowEditor
            mode={this.state.mode}
            currentDocument={this.currentDocument}
          />
        </div>
      </div>
    )
  }
}

export default App
