import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgd1 from "../../assets/PortfolioImages/400-x-400.jpg";
import imgd2 from "../../assets/PortfolioImages/400-x-550.jpg";
const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "50px",
  };
  return (
    <Slider {...settings} className="py-5">
      <img src={imgd1} className="my-5 px-4" />
      <img src={imgd2} className="px-4" />
      <img src={imgd1} className="my-5 px-4" />
      <img src={imgd2} className="px-4" />
      <img src={imgd1} className="my-5 px-4" />
      <img src={imgd2} className="px-4" />
    </Slider>
  );
};

export default PortfolioSlider;
