import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Technology/Content";

class Technology extends Component {
  render() {
    return (
      <React.Fragment>
        <BG
          src="../technology/background-technology-desktop.jpg"
          alt="background technology"
        />
        <Content />
      </React.Fragment>
    );
  }
}

export default Technology;
