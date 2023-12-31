// import libraries
import React, { Component } from "react";

// import components
import BG from "../Elements/BG";
import Content from "../Elements/Technology/Content";
import TabContent from "../Elements/Technology/TabContent";
import MobContent from "../Elements/Technology/MobContent";

class Technology extends Component {
  render() {
    return (
      // return a bg, content(pc), tab(tablet), mob(mobile)
      <React.Fragment>
        <BG
          src="../technology/background-technology"
          alt="background technology"
        />
        <Content />
        <TabContent />
        <MobContent />
      </React.Fragment>
    );
  }
}

export default Technology;
