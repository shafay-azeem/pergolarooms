import React from "react";
import "../Featured/FeaturedImage.css";
import fbIcon from "../../assets/FeaturedImages/face-icon.png";
import instaIcon from "../../assets/FeaturedImages/insta-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import Image1 from "../../assets/FeaturedImages/header1.jpg";
import Image2 from "../../assets/FeaturedImages/header2.jpg";
import Image3 from "../../assets/FeaturedImages/header3.jpg";
import Image4 from "../../assets/FeaturedImages/header4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fb from "../../assets/FeaturedImages/001-facebook.png";
import insta from "../../assets/FeaturedImages/002-instagram.png";
import { Button } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const FeaturedImage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  // const images = [Image1, Image2, Image3, Image4];
  const [images, setImages] = useState([
    {
      id: 1,
      image: require("../../assets/FeaturedImages/headerNew1.jpg"),
      text: "Enrich Lifestyle with pergolas",
      description:
        "Pergolarooms.ae excels in crafting optimized outdoor spaces for the GCC's climate, maximizing usage and aesthetics.",
    },
    {
      id: 2,
      image: require("../../assets/FeaturedImages/headerNew2.jpg"),
      text: "Elevate Your Space with Captivating Glass Rooms",
      description:
        "Seamlessly blend indoors and outdoors with CrystalView's climate-controlled glass rooms.",
    },
    {
      id: 3,
      image: require("../../assets/FeaturedImages/headerNew3.jpg"),
      text: "Revolutionize Car Parking with Innovative Pergola Structures",
      description:
        "Our sleek pergolas shield vehicles while harmonizing architectural aesthetics. Embrace elegance today.",
    },
    // {
    //   id: 4,
    //   image: require("../../assets/FeaturedImages/4.jpg"),
    //   text: "Pergolas Rooms 4",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione animi vitae eveniet nostrum laboriosam? Fuga cumque reiciendis voluptas quaerat dicta.",
    // },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 7000);

  //   return () => clearInterval(interval);
  // }, [images.length]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    cssEase: "linear",
    centerPadding: "0px",
    // autoplay: true,
    // speed: 700,
    // autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="Featured">
      <div className="container-fluid">
        <div className="row">
          <div
            className="Hero-slider col-lg-12 col-md-12 p-0"
            // style={{
            //   backgroundImage: `url(${images[currentIndex]})`,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   height: "650px",
            // }}
            style={{ position: "relative" }}
          >
            <Slider {...settings}>
              {images.map((x, index) => {
                return (
                  <div key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${x.image})`,
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className="container-fluid"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          height: "100vh",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div className="row">
                          <div className="col-lg-3"></div>
                          <div className="col-lg-6 text-center">
                            <h1
                              className="text-white font-face-re"
                              data-aos="zoom-in"
                              data-aos-duration="1000"
                              style={{ textShadow: "0 0 10px #000" }}
                            >
                              {x.text}
                            </h1>
                            <div className="inner px-5 py-3">
                              <p
                                className="text-white font-face-rr"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                style={{ textShadow: "0 0 10px #000" }}
                              >
                                {x.description}
                              </p>
                            </div>
                            <button
                              className="quote-btn"
                              data-aos="zoom-in"
                              data-aos-duration="1000"
                            >
                              <a
                                href="#contact-us"
                                className="font-face-rr"
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                }}
                              >
                                Get a Quote
                              </a>
                            </button>
                          </div>

                          <div className="col-lg-3"></div>
                        </div>
                      </div>

                      {/* <img className="d-block img-fluid" src={x.image} alt="1" /> */}
                      {/* 
                      <div className="Feature-Architecture">
                        <button className="">Architecture With Meaning</button>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div className="feature-icons d-none">
              <div
                style={{
                  transform: "rotate(270deg)",
                }}
                className="d-flex py-5"
              >
                <a
                  href="https://www.instagram.com/pergolarooms.ae/"
                  target="_blank"
                >
                  <img
                    src={insta}
                    alt="insta"
                    style={{
                      transform: "rotate(450deg)",
                    }}
                  />
                </a>
                <p className="ms-2 pt-1 font-face-rr">Instagram</p>
              </div>

              <div
                className="d-flex py-5 mb-4"
                style={{
                  transform: "rotate(270deg)",
                }}
              >
                <img
                  src={fb}
                  alt="fb"
                  style={{
                    transform: "rotate(450deg)",
                  }}
                />
                <p className="ms-2 pt-1 font-face-rr">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
