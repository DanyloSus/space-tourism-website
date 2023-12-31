// import libraries
import React, { Component } from "react";

// import style objects
import classes from "./Explore.module.css";
import aclasses from "./animations.module.css"; // an animation object

class Explore extends Component {
  render() {
    return (
      // return a circle of explore
      <div className={classes.explore + " " + aclasses.right}>
        <div className={classes.bg} />
        <h4 className="w-[274px] h-[274px] rounded-full bg-white text-black flex items-center justify-center md:w-[242px] md:h-[242px] sm:w-[150px] sm:h-[150px] sm:text-[20px]">
          Explore
        </h4>
      </div>
    );
  }
}

export default Explore;
