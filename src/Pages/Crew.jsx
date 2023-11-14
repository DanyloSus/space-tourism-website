import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Crew/Content";

class Crew extends Component {
  render() {
    return (
      <React.Fragment>
        <BG src="../crew/background-crew-desktop.jpg" alt="background crew" />
        <Content />
      </React.Fragment>
    );
  }
}

export default Crew;
