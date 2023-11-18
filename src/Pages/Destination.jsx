import React, { Component } from "react";
import BG from "../Elements/BG";
import Content from "../Elements/Destination/Content";
import TabContent from "../Elements/Destination/TabContent";
import MobContent from "../Elements/Destination/MobContent";

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
        <MobContent />
      </React.Fragment>
    );
  }
}

export default Destination;
