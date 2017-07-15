import React, { Component } from 'react';
import './App.css';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

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


const style = {
  App: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  a: {
    flex: '1',
    display: 'flex',
    flexDirection: 'row'
  }
}

// @Radium
class App extends Component {
  state = {
    documents
  }
  render() {
    return (
      <div style={style.App} className="App">
        <div id='a' style={style.a}>
          <SideBar />
          <DocumentList
            documents={this.state.documents}
          />
          <FlowEditor
            mode='write'
          />
        </div>
      </div>
    )
  }
}

export default App;
