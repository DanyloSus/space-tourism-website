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
        <h5 className="mr-auto ml-[165px] mt-[76px]">
          <span className="opacity-[0.25] mr-[28px]">02</span>
          Meet your crew
        </h5>
        <Slider {...settings} afterChange={this.afterChangeHandler}>
          {crew.map((crewmate, index) => (
            <div key={index}>
              <div className="flex justify-center overflow-y-hidden h-content">
                <div className="px-5 gap-5 max-w-[1138px] w-full flex justify-between">
                  <div className="flex justify-center flex-col h-full">
                    <div>
                      <h4>{crewmate.role}</h4>
                      <h3 className="mt-[15px] mb-[27px]">{crewmate.name}</h3>
                      <p className="max-w-[444px] min-w-[222px]">
                        {crewmate.bio}
                      </p>
                    </div>
                  </div>
                  <img
                    src={crewmate.images.png}
                    alt={`Photo of ${crewmate.name}`}
                    className={
                      (index === 1 ? "-scale-x-100" : "") +
                      " h-full max-w-[568px] max-h-[712px] object-cover mt-auto"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </>
    );
  }
}

export default Content;
