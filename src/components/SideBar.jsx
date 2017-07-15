import React from 'react'

import Connected from './Connected'
import HoverDrawer from './HoverDrawer'
import LeftArrow from './icons/LeftArrow'

import './SideBar.css'

const SideBar = () => {
  const icon = <LeftArrow />
  return (
    <HoverDrawer
      icon={icon}
    >
      <aside id='sidebar' className='sidebar'>
        <h1 className='logo'>Flow</h1>
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
            connected="⚡️"
            disconnected="offline"
          />
          <aside className='byline'>
          by Gavin Daly
          </aside>
        </footer>
      </aside>
    </HoverDrawer>

  )
}

export default SideBar
