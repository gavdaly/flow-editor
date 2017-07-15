import React from 'react'

import Connected from './Connected'
import LeftArrow from './icons/LeftArrow'

const SideBar = () => {
  return (
    <nav id='sidebar' style={{backgroundColor: '#eee', padding: '2vmin'}}>
      <h1>Flow</h1>
        <ul style={{listStyle: 'none'}}>
          <li>write</li>
          <li>edit</li>
          <li>format</li>
        </ul>
      <div>
        Settings
      </div>
      <footer>
        <Connected
          connected="online"
          offline="offline"
        />
        by Gavin Daly
      </footer>
      <LeftArrow />
    </nav>
  )
}

export default SideBar
