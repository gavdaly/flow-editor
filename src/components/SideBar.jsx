import React from 'react'

import Connected from './Connected'
import HoverDrawer from './HoverDrawer'
import ModeSelector from './ModeSelector'
import LeftArrow from './icons/LeftArrow'

import './SideBar.css'

const modes = ['write', 'edit', 'format']

const SideBar = ({selectMode}) => {
  const onSelectMode = (mode) => {
    selectMode(mode)
  }
  const icon = <LeftArrow />
  return (
    <HoverDrawer
      icon={icon}
    >
      <aside id='sidebar' className='sidebar'>
        <h1 className='logo'>Flow</h1>
        <ModeSelector
          selectMode={onSelectMode}
          options={modes}
        />
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
