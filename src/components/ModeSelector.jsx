import React from 'react'

import Item from './Item'

const ModeSelector = ({options, selectMode}) => {
  const onSelectMode = (mode) => {
    selectMode(mode)
  }
  const modeList = options.map((mode, i) => {
    return <li
      key={i}
    >
      <Item
        val={mode}
        onClick={onSelectMode}
      />
    </li>
  })
  return(
    <ul style={{listStyle: 'none'}}>
      {modeList}
    </ul>
  )
}

export default ModeSelector
