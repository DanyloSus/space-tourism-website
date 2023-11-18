import React, { Component } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class HamMenu extends Component {
  handleChange = () => {
    this.props.dispatch({ type: "CHANGE" });
  };
  render() {
    const { value } = this.props;
    const hamRoot = document.getElementById("hamburger");

    console.log(hamRoot);

    return createPortal(
      <div
        className={`${
          value === true ? "z-10" : "-z-10"
        } w-[254px] h-screen fixed backdrop-blur-[40.774227142333984px] right-0 top-0 pl-[35px] pt-[33px]`}
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
      </div>,
      hamRoot
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.isHam.value,
});

export default connect(mapStateToProps)(HamMenu);
