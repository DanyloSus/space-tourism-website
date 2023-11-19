// import libraries
import { AnimatePresence, motion } from "framer-motion";
import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class HamMenu extends Component {
  handleChange = () => {
    this.props.dispatch({ type: "CHANGE" });
  }; // call a CHANGE action

  render() {
    const { value } = this.props; // get value from redux store
    const hamRoot = document.getElementById("hamburger"); // get a hamburger element

    return createPortal(
      // create portal to the hamburger element
      <AnimatePresence>
        {value === true && (
          <motion.div
            className={`z-10 w-[254px] h-screen fixed backdrop-blur-[40.774227142333984px] right-0 top-0 pl-[35px] pt-[33px]`}
            initial={{ x: 254, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 254, opacity: 0 }}
            transition={{ stiffness: 100 }}
            open
            key="ham"
          >
            <img
              src="./shared/icon-close.svg"
              alt="icon close"
              className="ml-auto mr-[26px] mb-[60px]"
              onClick={this.handleChange}
            />
            <div className="flex flex-col gap-8">
              <NavLink
                className={({ isActive }) =>
                  (isActive
                    ? "border-r-[hsla(231,77%,90%,1)]"
                    : "hover:border-r-[hsla(231,77%,90%,0.5021)] border-r-[hsla(231,77%,90%,0)]") +
                  " sub2 text-white border-r-[4px] w-full text-left"
                }
                to="/"
              >
                <span className="mr-[11px] font-bold">00</span>Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  (isActive
                    ? "border-r-[hsla(231,77%,90%,1)]"
                    : "hover:border-r-[hsla(231,77%,90%,0.5021)] border-r-[hsla(231,77%,90%,0)]") +
                  " sub2 text-white border-r-[4px] w-full text-left"
                }
                to="/destination"
              >
                <span className="mr-[11px] font-bold">01</span>DESTINATION
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  (isActive
                    ? "border-r-[hsla(231,77%,90%,1)]"
                    : "hover:border-r-[hsla(231,77%,90%,0.5021)] border-r-[hsla(231,77%,90%,0)]") +
                  " sub2 text-white border-r-[4px] w-full text-left"
                }
                to="/crew"
              >
                <span className="mr-[11px] font-bold">02</span>CREW
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  (isActive
                    ? "border-r-[hsla(231,77%,90%,1)]"
                    : "hover:border-r-[hsla(231,77%,90%,0.5021)] border-r-[hsla(231,77%,90%,0)]") +
                  " sub2 text-white border-r-[4px] w-full text-left"
                }
                to="/technology"
              >
                <span className="mr-[11px] font-bold">03</span>TECHNOLOGY
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      hamRoot
    );
  }
}

const mapStateToProps = (state) => ({
  // create connect function for get a redux store value
  value: state.isHam.value,
});

export default connect(mapStateToProps)(HamMenu);
