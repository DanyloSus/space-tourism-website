import React, { Component, useState } from "react";

import data from "../../data.json";

class Content extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  render() {
    const technologies = data.technology;

    const btnClasses =
      " w-20 h-20 flex justify-center items-center rounded-full cursor-pointer transition-color";

    return (
      <div className="pl-[165px]">
        <h5>
          <span className="opacity-[0.25] mr-[28px]">03</span>
          SPACE LAUNCH 101
        </h5>
        <div className=" flex items-center justify-between h-content">
          <div className="flex flex-col justify-center items-center gap-8">
            <h4
              className={
                this.state.number === 0
                  ? "bg-white text-black" + btnClasses
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white" +
                    btnClasses
              }
              onClick={() => this.setState({ number: 0 })}
            >
              1
            </h4>
            <h4
              className={
                this.state.number === 1
                  ? "bg-white text-black" + btnClasses
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white" +
                    btnClasses
              }
              onClick={() => this.setState({ number: 1 })}
            >
              2
            </h4>
            <h4
              className={
                this.state.number === 2
                  ? "bg-white text-black" + btnClasses
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white" +
                    btnClasses
              }
              onClick={() => this.setState({ number: 2 })}
            >
              3
            </h4>
          </div>
          <div className="flex justify-center flex-col h-full">
            <h5 className=" text-[16px]">THE TERMINOLOGY…</h5>
            <h3 className="mt-[11px] mb-[17px]">
              {technologies[this.state.number].name}
            </h3>
            <p className="w-[444px]">
              {technologies[this.state.number].description}
            </p>
          </div>
          <img
            src={technologies[this.state.number].images.portrait}
            alt={`Slide`}
            className="w-[515px] h-[527px]"
          />
        </div>
      </div>
    );
  }
}

export default Content;
