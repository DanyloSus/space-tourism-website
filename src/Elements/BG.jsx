import React, { Component } from "react";

class BG extends Component {
  render() {
    return (
      // return bg which has a desktop, a tablet and a mobile backgrounds
      <>
        <img
          src={`./${this.props.src}` + "-desktop.jpg"}
          alt={this.props.alt}
          className=" fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-10 shadow-bg-inner md:hidden"
        />
        <img
          src={`./${this.props.src}` + "-tablet.jpg"}
          alt={this.props.alt}
          className=" fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-10 shadow-bg-inner md:block sm:hidden hidden"
        />
        <img
          src={`./${this.props.src}` + "-mobile.jpg"}
          alt={this.props.alt}
          className=" fixed w-[100vw] h-[100vh] object-cover top-0 left-0 -z-10 shadow-bg-inner sm:block hidden"
        />
      </>
    );
  }
}

export default BG;
