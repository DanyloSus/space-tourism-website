import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Home/Content";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <BG src="home/background-home-desktop.jpg" alt="background home" />
        <Content />
      </React.Fragment>
    );
  }
}

export default Home;
