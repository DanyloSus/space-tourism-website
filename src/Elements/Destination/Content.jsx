import React, { Component } from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import NavElement from "../NavElement";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Content extends Component {
  render() {
    const { id } = this.props.params;

    console.log(id);

    return (
      <div className="px-[165px] pb-[118px] flex items-end justify-between h-content pt-[76px]">
        <div className="w-full h-full flex flex-col justify-between">
          <h5>
            <span className="opacity-[0.25] mr-[28px]">0{id}</span>Pick your
            destination
          </h5>
          <img
            src={data.destinations[id - 1].images.webp}
            alt={`image of ${data.destinations[id - 1].name}`}
            className=" mt-auto mx-auto block"
          />
        </div>
        <div className="w-[445px]">
          <nav className="flex gap-[35px]">
            <NavElement to="/destination/1" text="Moon" />
            <NavElement to="/destination/2" text="MARS" />
            <NavElement to="/destination/3" text="EUROPA" />
            <NavElement to="/destination/4" text="TITAN" />
          </nav>
          <h2 className="mb-[14px] mt-[37px]">
            {data.destinations[id - 1].name}
          </h2>
          <p>{data.destinations[id - 1].description}</p>
          <div className="w-full mt-[54px] mb-[28px] bg-[hsla(231,_15%,_26%,_1)] h-[3px]" />
          <div className="flex">
            <div className="mr-auto">
              <p className="sub2">AVG. DISTANCE</p>
              <p className="sub1">{data.destinations[id - 1].distance}</p>
            </div>
            <div className="mr-auto">
              <p className="sub2">Est. travel time</p>
              <p className="sub1">{data.destinations[id - 1].travel}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Content);