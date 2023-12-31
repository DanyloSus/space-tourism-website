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

class Content extends Component {
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
      <div className="flex items-center justify-center md:hidden sm:hidden">
        <div className=" max-w-[1138px] w-full flex flex-col mt-[76px] overflow-x-visible">
          <h5 className="px-5">
            <span className="opacity-[0.25] mr-[28px]">02</span>
            Meet your crew
          </h5>
          <Slider {...settings}>
            {crew.map((crewmate, index) => (
              <div key={index}>
                <div className="max-w-[1138px] w-full flex justify-center h-[654px] mx-auto px-5">
                  <div className=" gap-5 w-full flex justify-between">
                    <div className="flex justify-center flex-col h-full z-10">
                      <div>
                        <h4 className="top_anim">{crewmate.role}</h4>
                        <h3 className="top_anim mt-[15px] mb-[27px]">
                          {crewmate.name}
                        </h3>
                        <p className="top_anim max-w-[444px] min-w-[222px]">
                          {crewmate.bio}
                        </p>
                      </div>
                    </div>
                    <img
                      src={crewmate.images.png}
                      alt={`Photo of ${crewmate.name}`}
                      className={
                        (index === 1 ? "-scale-x-100" : "") +
                        " top_anim h-full max-w-[568px] max-h-[712px] object-cover mt-auto"
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Content;
