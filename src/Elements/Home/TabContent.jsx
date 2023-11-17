import React, { Component } from "react";
import Explore from "./Explore";

class TabContent extends Component {
  render() {
    return (
      <div className="hidden flex-col items-center pt-[106px] md:flex  w-screen text-center h-full overflox-y-visible pb-[104px]">
        <div className="max-w-[444px] w-full mb-[156px]">
          <h5 className="text-[20px]">SO, YOU WANT TO TRAVEL TO</h5>
          <h2 className="my-6">SPACE</h2>
          <p>
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
