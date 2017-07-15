import React, { Component } from 'react';
import './App.css';

import FlowEditor from './components/FlowEditor'
import DocumentList from './components/DocumentList'
import SideBar from './components/SideBar'

const documents = [
  { title: "Indian Camp", id: 1 },
  { title: "The Sun Also Rises", id: 2 },
  { title: "A Farewell to Arms", id: 3 },
  { title: "Death in the Afternoon", id: 4 },
  { title: "Green Hills of Africa", id: 5 },
  { title: "For Whom the Bell Tolls", id: 6 },
  { title: "The Old Man and the Sea", id: 7 }
]

const mode = 'write'


class App extends Component {
  state = {
    documents,
    mode
  }
  render() {
    return (
      <div className="App">
        <div id='a' className='a'>
          <SideBar />
          <DocumentList
            documents={this.state.documents}
          />
          <FlowEditor
            mode={this.state.mode}
          />
        </div>
      </div>
    )
  }
}

export default App;
