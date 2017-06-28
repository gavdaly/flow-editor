import React, { Component } from 'react';
import './App.css';

import FlowEditor from './FlowEditor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>flow editor</h2>
        </div>
        <FlowEditor />
      </div>
    )
  }
}

export default App;
