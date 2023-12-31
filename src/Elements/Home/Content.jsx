// import libraries
import React, { Component } from "react";

// import elements
import Explore from "./Explore";

// import a style object
import classes from "./animations.module.css";

class Content extends Component {
  render() {
    return (
      // return a desktop home page
      <div className="flex items-end justify-center md:hidden sm:hidden">
        <div className="max-w-[1110px] px-5 w-full flex  items-end justify-between h-content pb-[131px]">
          <div className="w-[444px]">
            <h5 className={classes.left}>So, you want to travel to</h5>
            <h1 className={classes.right + " my-6"}>Space</h1>
            <p className={classes.left}>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Explore />
        </div>
      </div>
    );
  }
}

export default Content;
