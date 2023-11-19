// import libraries
import React, { Component } from "react";

// import components
import BG from "../Elements/BG";
import Content from "../Elements/Crew/Content";
import TabContent from "../Elements/Crew/TabContent";
import MobContent from "../Elements/Crew/MobContent";

class Crew extends Component {
  render() {
    return (
      // return a bg, content(pc), tab(tablet), mob(mobile)
      <React.Fragment>
        <BG src="../crew/background-crew" alt="background crew" />
        <Content />
        <TabContent />
        <MobContent />
      </React.Fragment>
    );
  }
}

export default Crew;
