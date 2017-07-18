import React from 'react'

class StyleButton extends React.Component {
  onToggle = () => {
    this.props.onToggle(this.props.style)
  }
  render() {
    let className = 'RichEditor-styleButton'
    if (this.props.active) {
      className += ' RichEditor-activeButton'
    }

    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    )
  }
}

export default StyleButton
