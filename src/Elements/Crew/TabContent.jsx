// import libraries
import React, { Component } from "react";
import Slider from "react-slick";

// import styles
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./animation.css";

// import data
import data from "../../data.json";

class TabContent extends Component {
  render() {
    const settings = {
      // create settings
      dots: true, // set dots
      infinite: true, // infinite scroll
      slidesToShow: 1, // shows only one slide
      slidesToScroll: 1, // scroll only one slide
      initialSlide: 0,
      speed: 500, // speed of scroll
      arrows: false, // delete arrows
      lazyLoad: true, // lazy load of images
      adaptiveHeight: true,

      dotsClass: "slick-dots slick-thumb", // dots classes
    };

    const crew = data.crew; // get crea data

    return (
      // return a mobile crew page
      <div className="md:flex hidden flex-col justify-between text-center sm:hidden">
        <h5 className="mr-auto mb-15 ml-[38px] mt-10 mb-[60px] text-[20px]">
          <span className="opacity-[0.25] mr-[28px]">02</span>
          Meet your crew
        </h5>
        <Slider {...settings}>
          {crew.map((crewmate, index) => (
            <div key={index}>
              <div className="flex flex-col items-center max-w-[458px] w-full mx-auto justify-between h-[804px]">
                <div className="z-10">
                  <span className="sub1 opacity-[0.4994] top_anim">
                    {crewmate.role}
                  </span>
                  <h3 className="text-[40px] mb-4 mt-2 top_anim">
                    {crewmate.name}
                  </h3>
                  <p className="top_anim">{crewmate.bio}</p>
                </div>
                <img
                  src={crewmate.images.png}
                  alt={`Photo of ${crewmate.name}`}
                  className="max-h-[532px] h-full object-cover mt-10 -z-20 top_anim"
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
