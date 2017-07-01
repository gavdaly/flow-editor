import React, { Component } from 'react';
import './App.css';

import FlowEditor from './FlowEditor'
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'

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

class App extends Component {
  render() {
    return (
      <div style={style.App} className="App">
        <Header />
        <div id='a' style={style.a}>
          <SideBar />
          <FlowEditor />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
