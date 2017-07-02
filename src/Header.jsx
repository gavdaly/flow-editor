import React from 'react'

const style = {
  backgroundColor: '#222',
  color: 'white',
  title_group: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  open_file_tabs: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}


const Header = () => {
  return (
    <header style={style} id='header' className="App-header">
      <div style={style.title_group}>
        <h2>flow editor</h2>
        <nav>file select</nav>
        <div className='spacer'/>
      </div>
      <nav style={style.open_file_tabs}>
        <div>tabs</div>
        <div>tabs</div>
        <div>tabs</div>
        <div>tabs</div>
        <div>tabs</div>
      </nav>
    </header>
  )
}

export default Header
