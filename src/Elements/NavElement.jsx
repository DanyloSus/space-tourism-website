// import libraries
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavElement extends Component {
  render() {
    // return custome NavLink
    return (
      <>
        <li className="flex items-end justify-center md:hidden">
          <NavLink
            to={this.props.to}
            end={this.props.end}
            className={({ isActive }) =>
              (isActive
                ? "border-b-[hsla(231,77%,90%,1)]"
                : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] ") +
              " border-b-[3px] transition-colors pb-8 whitespace-nowrap"
            }
          >
            {this.props.text}
          </NavLink>
        </li>
        <li className=" items-center justify-center md:flex hidden  h-full">
          <span className="sub2">
            <NavLink
              to={this.props.to}
              end={this.props.end}
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] ") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-8 "
              }
            >
              {this.props.text}
            </NavLink>
          </span>
        </li>
      </>
    );
  }
}

export default NavElement;
