import React, { Component } from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import NavElement from "../NavElement";
import "./animation.scss";

export function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Content extends Component {
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
      <div className="flex flex-col justify-center ml-[1px] pt-[76px]  px-5 items-center md:hidden sm:hidden overflow-hidden">
        <div className="max-w-[1110px] w-full">
          <h5 className="mr-auto mb-16">
            <span className="opacity-[0.25] mr-[28px]">01</span>
            Pick your destination
          </h5>
          <div className="w-full flex items-center justify-between">
            <img
              src={`${undef ? "./destination/" : "./"}${
                destination.images.webp
              }`}
              alt={`image of ${destination.name}`}
              className=" mx-auto block img_anim"
            />
            <div className="max-w-[444px] w-full overflow-x-auto">
              <nav className="flex gap-[35px] left_anim">
                <NavElement to="/destination" text="Moon" end />
                <NavElement to="/destination/2" text="MARS" />
                <NavElement to="/destination/3" text="EUROPA" />
                <NavElement to="/destination/4" text="TITAN" />
              </nav>
              <h2 className="mb-[14px] mt-[37px] left_anim">
                {destination.name}
              </h2>
              <p className="left_anim">{destination.description}</p>
              <div className="w-full mt-[54px] mb-[28px] bg-[hsla(231,_15%,_26%,_1)] h-[3px]" />
              <div className="flex flex-wrap left_anim w-full  left_anim">
                <div className="mr-auto">
                  <p className="sub2">AVG. DISTANCE</p>
                  <p className="sub1">{destination.distance}</p>
                </div>
                <div className="mr-auto">
                  <p className="sub2">Est. travel time</p>
                  <p className="sub1">{destination.travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Content);
