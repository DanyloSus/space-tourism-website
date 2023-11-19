import React, { Component } from "react";

import data from "../../data.json";

class MobContent extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  render() {
    const technology = data.technology[this.state.number];

    const btnClasses =
      " w-[40px] h-[40px] flex justify-center items-center rounded-full cursor-pointer transition-color text-[16px]";

    return (
      <div className="text-center  w-full sm:flex hidden flex-col justify-center items-center pb-[81px]">
        <h5 className="text-[16px] mt-6">
          <span className="opacity-[0.25] mr-[18px] font-bold">03</span>
          SPACE LAUNCH 101
        </h5>
        <img
          src={technology.images.landscape}
          alt={technology.name}
          className="w-screen h-[170px] mt-8 mb-[34px] object-cover"
        />
        <div className="max-w-[327px] w-full flex flex-col items-center">
          <div className="flex gap-4 items-center justify-center w-full mb-[26px]">
            <h4
              className={
                (this.state.number === 0
                  ? "bg-white text-black"
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white") +
                btnClasses
              }
              onClick={() => this.setState({ number: 0 })}
            >
              1
            </h4>
            <h4
              className={
                (this.state.number === 1
                  ? "bg-white text-black"
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white") +
                btnClasses
              }
              onClick={() => this.setState({ number: 1 })}
            >
              2
            </h4>
            <h4
              className={
                (this.state.number === 2
                  ? "bg-white text-black"
                  : "border border-[hsla(0,_0%,_100%,_0.25)] hover:border-white") +
                btnClasses
              }
              onClick={() => this.setState({ number: 2 })}
            >
              3
            </h4>
          </div>
          <span className="sub2">THE TERMINOLOGY…</span>
          <h4 className="text-[24px] mt-[9px] mb-4">{technology.name}</h4>
          <p>{technology.description}</p>
        </div>
      </div>
    );
  }
}

export default MobContent;
