import React from 'react'

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
        <li>connected</li>
      </ul>
    </nav>
  )
}

export default SideBar
