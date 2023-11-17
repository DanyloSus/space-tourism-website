import React, { Component } from "react";
import Slider from "react-slick";

import data from "../../data.json";

class TabContent extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      speed: 500,
      arrows: false,
      lazyLoad: true,
      adaptiveHeight: true,

      dotsClass: "slick-dots slick-thumb",
    };

    const crew = data.crew;

    return (
      <div className="flex flex-col justify-between text-center">
        <h5 className="mr-auto mb-15 ml-[38px] mt-10 mb-[60px] text-[20px]">
          <span className="opacity-[0.25] mr-[28px]">02</span>
          Meet your crew
        </h5>
        <Slider {...settings}>
          {crew.map((crewmate, index) => (
            <div key={index}>
              <div className="flex flex-col items-center max-w-[458px] w-full mx-auto justify-between h-[804px]">
                <div className="z-10">
                  <span className="sub1 opacity-[0.4994]">{crewmate.role}</span>
                  <h3 className="text-[40px] mb-4 mt-2">{crewmate.name}</h3>
                  <p>{crewmate.bio}</p>
                </div>
                <img
                  src={crewmate.images.png}
                  alt={`Photo of ${crewmate.name}`}
                  className=" mt-10 -z-20"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default TabContent;
