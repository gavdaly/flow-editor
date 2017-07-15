import React from 'react'

const Connected = ({connected, offline}) => {
  return <div className='connection'>{navigator.onLine ? connected : offline}</div>
}

export default Connected
