import React, { Component } from "react";

class BG extends Component {
  render() {
    return (
      <img
        src={`./${this.props.src}`}
        alt={this.props.alt}
        className=" absolute w-[100vw] h-[100vh] object-cover top-0 left-0 -z-10 shadow-bg-inner"
      />
    );
  }
}

export default BG;
