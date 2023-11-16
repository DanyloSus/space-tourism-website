import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavElement extends Component {
  render() {
    return (
      <li className="h-24 flex items-end justify-center">
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
    );
  }
}

export default NavElement;
