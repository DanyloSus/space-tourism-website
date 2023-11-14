import React, { Component, useState } from "react";
import Slider from "react-slick";

import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../../data.json";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0,
    };
  }

  afterChangeHandler = (currentSlide) => {
    this.setState = { currentSlide };

    console.log(currentSlide);
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      speed: 500,
      arrows: false,
      adaptiveHeight: true,

      dotsClass: "slick-dots slick-thumb",
    };

    const crew = data.crew;

    return (
      <>
        <Slider {...settings} afterChange={this.afterChangeHandler}>
          {crew.map((crewmate, index) => (
            <div key={index}>
              <div className="pl-[165px] pr-[137px] flex items-end justify-between h-content">
                <div className="flex justify-between flex-col h-full pt-[76px] pb-[229px]">
                  <h5>
                    <span className="opacity-[0.25] mr-[28px]">
                      0{index + 1}
                    </span>
                    Pick your destination
                  </h5>
                  <div>
                    <h4>{crewmate.role}</h4>
                    <h3 className="mt-[15px] mb-[27px]">{crewmate.name}</h3>
                    <p className="w-[444px]">{crewmate.bio}</p>
                  </div>
                </div>
                <img
                  src={crewmate.images.png}
                  alt={`Slide ${index + 1}`}
                  className="pt-[62px]"
                />
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}

export default Content;
