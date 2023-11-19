import React, { Component } from "react";
import { withParams } from "./Content";

import data from "../../data.json";
import { NavLink } from "react-router-dom";

import "./animation.scss";

class TabContent extends Component {
  render() {
    let id;
    let undef = false;

    if (undefined == this.props.params.id) {
      id = 0;
      undef = true;
    } else {
      id = this.props.params.id - 1;
    }

    console.log(id);

    const destination = data.destinations[id];

    return (
      <div className="md:flex flex-col justify-between items-center text-center hidden">
        <h5 className="mr-auto mb-16 ml-[38px]  text-[20px] mt-10">
          <span className="opacity-[0.25] mr-[28px]">01</span>
          Pick your destination
        </h5>
        <div className="flex-col items-center justify-between">
          <img
            src={`${undef ? "./destination/" : "./"}${destination.images.webp}`}
            alt={`image of ${destination.name}`}
            className=" mx-auto block max-w-[300px] h-[300px] object-cover img_anim"
          />
          <nav className="flex gap-9 mt-[53px] mb-8 justify-center left_anim">
            <NavLink
              to="/destination"
              end
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] text-light-cyan hover:text-white") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 "
              }
            >
              MOON
            </NavLink>
            <NavLink
              to="/destination/2"
              end
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] text-light-cyan hover:text-white") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 "
              }
            >
              MARS
            </NavLink>
            <NavLink
              to="/destination/3"
              end
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] text-light-cyan hover:text-white") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 "
              }
            >
              EUROPA
            </NavLink>
            <NavLink
              to="/destination/4"
              end
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] text-light-cyan hover:text-white") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 "
              }
            >
              TITAN
            </NavLink>
          </nav>
          <h2 className="text-[80px] left_anim">{destination.name}</h2>
          <p className="max-w-[573px] w-full mt-2 mb-12 left_anim">
            {destination.description}
          </p>
          <div className="w-full h-[1px] bg-[#383B4B] mb-7" />
          <div className="left_anim w-full flex items-center justify-around gap-[11px] mb-[62px]">
            <div className="flex flex-col items-center justify-center gap-3 max-w-[223px] w-full">
              <span className="sub2 w-full">AVG. DISTANCE</span>
              <span className="sub1 w-full">{destination.distance}</span>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 max-w-[223px] w-full">
              <span className="sub2 w-full">Est. travel time</span>
              <span className="sub1 w-full">{destination.travel}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(TabContent);
