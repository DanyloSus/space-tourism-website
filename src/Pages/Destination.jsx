import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Destination/Content";
import TabContent from "../Elements/Destination/TabContent";

class Destination extends Component {
  render() {
    return (
      <React.Fragment>
        <BG
          src="../destination/background-destination"
          alt="background destination"
        />
        <Content />
        <TabContent />
      </React.Fragment>
    );
  }
}

export default Destination;
