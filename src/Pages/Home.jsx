// import libraries
import React, { Component } from "react";

// import components
import BG from "../Elements/BG";
import Content from "../Elements/Home/Content";
import TabContent from "../Elements/Home/TabContent";
import MobContent from "../Elements/Home/MobContent";

class Home extends Component {
  render() {
    return (
      // return a bg, content(pc), tab(tablet), mob(mobile)
      <React.Fragment>
        <BG src="home/background-home" alt="background home" />
        <Content />
        <TabContent />
        <MobContent />
      </React.Fragment>
    );
  }
}

export default Home;
