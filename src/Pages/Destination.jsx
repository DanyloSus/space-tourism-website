import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Destination/Content";

class Destination extends Component {
  render() {
    return (
      <React.Fragment>
        <BG
          src="../destination/background-destination-desktop.jpg"
          alt="background destination"
        />
        <Content />
      </React.Fragment>
    );
  }
}

export default Destination;
