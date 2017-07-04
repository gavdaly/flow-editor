import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Radium from 'radium'

// @Radium
const style = {
  backgroundColor: '#222',
  color: 'white',
  title_group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  open_file_tabs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'stretch',
    div: {
      width: '100%',
      textAlign: 'center'
    }
  }
}


const Header = () => {
  return (
    <header style={style} id='header' className="App-header">
      <div style={style.title_group}>
        <h2>flow editor</h2>
        <nav>file select</nav>
        <div className='spacer'/>
      </div>
      <nav style={style.open_file_tabs}>
        {/* <NavLink style={style.open_file_tabs.div}>tabs</NavLink>
        <NavLink style={style.open_file_tabs.div}>tabs</NavLink>
        <NavLink style={style.open_file_tabs.div}>tabs</NavLink>
        <NavLink style={style.open_file_tabs.div}>tabs</NavLink>
        <NavLink style={style.open_file_tabs.div}>tabs</NavLink> */}
      </nav>
    </header>
  )
}

export default Header
