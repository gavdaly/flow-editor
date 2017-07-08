import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Radium from 'radium'

import Connected from './components/Connected'

const SideBar = () => {
  return (
    <nav id='sidebar' style={{backgroundColor: '#eee'}}>
      <ul>
        <li>mode
          <ul>
            <li>write</li>
            <li>edit</li>
            <li>format</li>
          </ul>
        </li>
        <li>settings</li>
        <li>
          <Connected
            connected="online"
            offline="offline"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Radium(SideBar)
