import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Home/Content";
import TabContent from "../Elements/Home/TabContent";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <BG src="home/background-home" alt="background home" />
        <Content />
        <TabContent />
      </React.Fragment>
    );
  }
}

export default Home;
