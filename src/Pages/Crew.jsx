import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Crew/Content";
import TabContent from "../Elements/Crew/TabContent";

class Crew extends Component {
  render() {
    return (
      <React.Fragment>
        <BG src="../crew/background-crew" alt="background crew" />
        <Content />
        <TabContent />
      </React.Fragment>
    );
  }
}

export default Crew;
