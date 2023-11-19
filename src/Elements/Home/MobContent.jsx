// import libraries
import React, { Component } from "react";

// import elements
import Explore from "./Explore";

// import a style object
import classes from "./animations.module.css";

class MobContent extends Component {
  render() {
    return (
      // return a mobile home page
      <div className="sm:flex hidden text-center justify-between mt-12 flex-col items-center h-max pb-12">
        <div className="max-w-[327px] w-full px-5 mb-20">
          <span className={classes.left + " sub2 text-[16px]"}>
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h2 className={classes.right + " text-[80px] my-4"}>SPACE</h2>
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

export default MobContent;
