import React from 'react'

import Connected from './Connected'
import LeftArrow from './icons/LeftArrow'

import './SideBar.css'

const SideBar = () => {
  return (
    <nav id='sidebar' className='sidebar'>
      <h1>Flow</h1>
      <ul style={{listStyle: 'none'}}>
        <li>write</li>
        <li>edit</li>
        <li>format</li>
      </ul>
      <div className='spacer'></div>
      <div>
        Settings
      </div>
      <footer>
        <Connected
          connected="online"
          offline="offline"
        />
        <aside className='byline'>
        by Gavin Daly
        </aside>
      </footer>
      <LeftArrow />
    </nav>
  )
}

export default SideBar
