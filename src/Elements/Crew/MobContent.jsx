// import libraries
import React, { Component } from "react";
import Slider from "react-slick";

// import styles
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import data
import data from "../../data.json";

class MobContent extends Component {
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
      <div className="sm:flex hidden text-center w-full  justify-center px-5 pb-[104px]">
        <div className="max-w-[327px] w-full flex flex-col">
          <h5 className="text-[16px] mt-6 mb-8">
            <span className="opacity-[0.25] mr-[18px] font-bold">02</span>
            Meet your crew
          </h5>
          <Slider {...settings}>
            {crew.map((crewmate, index) => (
              <div key={index} className="w-full">
                <div className="w-full">
                  <img
                    src={crewmate.images.webp}
                    alt={`Photo of ${crewmate.name}`}
                    className="top_anim -z-20 max-h-[222px] h-full mx-auto"
                  />
                  <div className="w-full h-1 bg-[hsla(231,_15%,_26%,_1)] mb-[74px]" />
                  <span className="sub1 opacity-[0.4994] text-[16px] top_anim">
                    {crewmate.role}
                  </span>
                  <h3 className="text-[24px] mb-4 mt-2 top_anim">
                    {crewmate.name}
                  </h3>
                  <p className="top_anim">{crewmate.bio}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default MobContent;
