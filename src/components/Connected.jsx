import React from 'react'

const Connected = ({connected, disconnected}) => {
  return <div className='connection'>{navigator.onLine ? connected : disconnected}</div>
}

export default Connected
