// import libraries
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withParams } from "./Content";

// import data
import data from "../../data.json";

// import styles
import "./animation.scss";

class MobContent extends Component {
  render() {
    let id; // create a null id variable
    let undef = false; // create a variable of is the param undefined

    if (undefined == this.props.params.id) {
      // if the param is undefined
      id = 0; // set id of destination 0
      undef = true; // set undefined is
    } else {
      id = this.props.params.id - 1; // set id of destination
    }

    const destination = data.destinations[id]; // set destination

    return (
      // return a mobile destination page
      <div className="text-center  w-full sm:flex  justify-center hidden">
        <div className="max-w-[327px] w-full flex flex-col items-center">
          <h5 className="text-[16px] mt-6">
            <span className="opacity-[0.25] mr-[18px] font-bold">01</span>
            Pick your destination
          </h5>
          <img
            src={`${undef ? "./destination/" : "./"}${destination.images.webp}`}
            alt={`image of ${destination.name}`}
            className=" mx-auto block max-w-[170px] h-[170px] object-cover mt-8 mb-[26px] img_anim"
          />
          <nav className="flex gap-[26px] items-center justify-center left_anim">
            <NavLink
              to="/destination"
              end
              className={({ isActive }) =>
                (isActive
                  ? "border-b-[hsla(231,77%,90%,1)]"
                  : "hover:border-b-[hsla(231,77%,90%,0.5021)] border-b-[hsla(231,77%,90%,0)] text-light-cyan hover:text-white") +
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal pb-3 text-[14px] "
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
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 text-[14px] "
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
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 text-[14px] "
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
                " border-b-[3px] transition-colorswhitespace-nowrap font-normal  pb-3 text-[14px] "
              }
            >
              TITAN
            </NavLink>
          </nav>
          <h3 className="mt-5 mb-[1px]  left_anim">{destination.name}</h3>
          <p className=" left_anim">{destination.description}</p>
          <div className="w-full h-[1px] my-8 bg-[hsla(231,_15%,_26%,_1)]" />
          <div className="w-full flex flex-col items-center gap-8 mb-[58px] left_anim">
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

export default withParams(MobContent);
