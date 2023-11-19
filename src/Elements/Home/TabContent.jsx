// import libraries
import React, { Component } from "react";

// import elements
import Explore from "./Explore";

// import a style object
import classes from "./animations.module.css";

class TabContent extends Component {
  render() {
    return (
      // return a mobile home page
      <div className="hidden flex-col items-center pt-[106px] md:flex  w-screen text-center h-full overflox-y-visible pb-[104px] sm:hidden">
        <div className="max-w-[444px] w-full mb-[156px]">
          <h5 className={classes.left + " text-[20px]"}>
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h2 className={classes.right + " my-6"}>SPACE</h2>
          <p className={classes.left}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Explore />
      </div>
    );
  }
}

export default TabContent;
