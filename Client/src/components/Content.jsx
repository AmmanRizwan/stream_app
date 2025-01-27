import React, { useContext } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Content = ({title, imageData}) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
  <div className="w-5/6 m-auto py-5 ">
    <div className="text-2xl font-bold md:font-semibold my-3 md:text-4xl">
      {title}
    </div>
     <div className="slider-container">
      <Slider {...settings}>
        <div className="cursor-pointer hover:scale-105 transition-all duration-500" style={{ width: 250 }}>
          <img className="p-1 rounded-md" src={imageData} alt="" />
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all duration-500" style={{ width: 250 }}>
          <img className="p-1 rounded-md" src={imageData} alt="" />
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all duration-500" style={{ width: 250 }}>
          <img className="p-1 rounded-md" src={imageData} alt="" />
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all duration-500" style={{ width: 250 }}>
          <img className="p-1 rounded-md" src={imageData} alt="" />
        </div>
        <div className="cursor-pointer hover:scale-105 transition-all duration-500" style={{ width: 250 }}>
          <img className="p-1 rounded-md" src={imageData} alt="" />
        </div>

      </Slider>
    </div>
  </div> 
  )
}

export default Content;