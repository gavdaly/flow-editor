import React from 'react'

const Connected = ({connected, offline}) => {
  return <div>{navigator.onLine ? connected : offline}</div>
}

export default Connected
