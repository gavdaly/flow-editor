import React, { Component } from "react";

class HoverDrawer extends Component {
  state = {
    hovering: false
  };
  hoverIn = () => {
    this.setState({ hovering: true });
  };
  hoverOut = () => {
    this.setState({ hovering: false });
  };
  render() {
    return (
      <div
        className="hoverDrawer"
        onMouseEnter={this.hoverIn}
        onMouseLeave={this.hoverOut}
      >
        {this.state.hovering ? this.props.children : this.props.icon}
      </div>
    );
  }
}

export default HoverDrawer;
