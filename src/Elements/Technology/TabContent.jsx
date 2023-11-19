import React, { Component } from "react";
import { AnimatePresence, motion } from "framer-motion";

import data from "../../data.json";

class TabContent extends Component {
  constructor() {
    super();
    this.state = { number: 0 };
  }

  render() {
    const technology = data.technology[this.state.number];

    const btnClasses =
      " w-[60px] h-[60px] flex justify-center items-center rounded-full cursor-pointer transition-color text-[24px]";

    return (
      <AnimatePresence>
        <div className="hidden md:flex flex-col justify-between text-center items-center sm:hidden  overflow-hidden">
          <h5 className="mr-auto ml-[38px] mt-10 text-[20px]">
            <span className="opacity-[0.25] mr-[28px]">03</span>
            SPACE LAUNCH 101
          </h5>
          <motion.img
            src={technology.images.portrait}
            alt={`Slide`}
            className="w-screen h-[310px] mt-[60px] object-cover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            key={technology.images.portrait}
          />
          <div className="max-w-[458px] w-full flex flex-col items-center">
            <div className="flex gap-4 items-center justify-center w-full mt-14 mb-11">
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
            <span className="sub2 text-[16px]">THE TERMINOLOGY…</span>
            <motion.h4
              className="text-[24px] mt-[9px] mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0 }}
              key={technology.name}
            >
              {technology.name}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: 0.175 }}
              key={technology.description}
            >
              {technology.description}
            </motion.p>
          </div>
        </div>
      </AnimatePresence>
    );
  }
}

export default TabContent;
