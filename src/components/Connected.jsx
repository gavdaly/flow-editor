import React from 'react'
import {online} from '../lib/online'

const Connected = ({connected, disconnected}) => {
  return <div className='connection'>{online() ? connected : disconnected}</div>
}

export default Connected
