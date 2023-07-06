import React, { useState } from "react";
import "../Service/ServiceSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const ServiceSlider = () => {
  const slides = [
    {
      id: 1,
      imgSrc: require("../../assets/ServiceImages/glass-rooms.jpg"),
      heading: "Glass Rooms",
      subheading: "Elevate Outdoor Living Experience",
      description:
        "Experience the beauty of nature while staying comfortable and protected with our exquisite glass rooms. Designed to seamlessly blend the outdoors with your living space, our customized glass rooms provide a panoramic view of your surroundings.",
      bgcolor: "#6c3433",
      route: "/glass-rooms",
    },

    {
      id: 2,
      imgSrc: require("../../assets/ServiceImages/pergolas.jpg"),
      heading: "Pergolas",
      subheading: "Transform with custom pergolas.",
      description:
        "Elevate your outdoor space with our exquisite custom pergolas. At PERGOLAROOMS, we bring over a decade of expertise in crafting bespoke pergola designs that enhance your lifestyle. Our skilled team of craftsmen creates stunning pergolas using premium materials, tailored to your unique style and preferences.",
      bgcolor: "#37280e",
      route: "/pergolas",
    },
    {
      id: 3,
      imgSrc: require("../../assets/ServiceImages/bar-&-bbq.jpg"),
      heading: "Bar & BBQ Counter",
      subheading: "Enhance Grilling Oasis Bliss",
      description:
        "Create the ultimate culinary haven in your backyard with our custom-designed BBQ area pergolas. Crafted with precision and style, our pergolas provide the perfect shelter for grilling enthusiasts. Enjoy the benefits of shade and protection.",
      bgcolor: "#77736f",
      route: "/bbq-area",
    },

    {
      id: 4,
      imgSrc: require("../../assets/ServiceImages/car-parking-pergolas.jpg"),
      heading: "Car Parking Pergolas",
      subheading: "Enhance Vehicle Protection Elegantly",
      description:
        "Shield your vehicles from the elements while adding a touch of elegance to your outdoor space with our bespoke car parking shades. Our expertly designed and crafted shades offer superior protection against sun, rain, and hail.",
      bgcolor: "#591e0a",
      route: "/car-parking-shades",
    },

    {
      id: 5,
      imgSrc: require("../../assets/ServiceImages/doors-and-fences.jpg"),
      heading: "Doors & Fences",
      subheading: "Elevate Space with Aluminum Elegance",
      description:
        "Experience the perfect combination of style, functionality, and longevity with our premium aluminum doors and windows. Crafted with precision and attention to detail, our customized solutions offer unmatched durability and aesthetic appeal.",
      bgcolor: "#570b34",
      route: "/aluminium-doors",
    },

    {
      id: 6,
      imgSrc: require("../../assets/ServiceImages/car-parking-pergolas.jpg"),
      heading: "CNC Cut Panels",
      subheading: "Enhance with CNC Cut Panels",
      description:
        "Introducing our precision-engineered CNC cut panels, the perfect addition to your custom pergola design. At PERGOLAROOMS, we utilize advanced CNC technology to create intricate and stunning patterns on panels, adding a touch of elegance to your outdoor space.",
      bgcolor: "#babc72",
      route: "/cnc-panel-cutter",
    },
  ];

  // const [activeSlide, setActiveSlide] = useState(0);

  // const handleDotClick = (index) => {
  //   setActiveSlide(index);
  // };

  // const currentSlide = slides[activeSlide];

  // const navigate = useNavigate();

  // const goToPage = (route) => {
  //   navigate(route);
  // };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    cssEase: "linear",
    centerPadding: "0px",
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
    <>
      <div className="container-fluid p-0">
        <Slider {...settings}>
          {slides.map((x, index) => {
            return (
              <div>
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${x.imgSrc})`,
                  }}
                  className="slickBanner"
                >
                  <div className="text-overlay">
                    <h2>{x.heading}</h2>
                    <p>{x.subheading}</p>
                    <p>{x.description}</p>

                    <a className="service-readmore-link font-face-rr">
                      <BsFillPlusCircleFill />
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>

    // <div className="Service container-fluid">
    //   <div className="row">
    //     <div className="col-md-6 px-0">
    //       <img
    //         src={currentSlide.imgSrc}
    //         className="img-fluid"
    //         alt="Service Image"
    //       />
    //     </div>
    //     <div
    //       className="col-md-6 px-0"
    //       style={{ backgroundColor: currentSlide.bgcolor }}
    //     >
    //       <div className="service-content">
    //         <h5 className="font-face-rb">{currentSlide.heading}</h5>
    //         <p className="content-subheading font-face-rr">
    //           {currentSlide.subheading}
    //         </p>
    //         <p className="content-description font-face-rr">
    //           {currentSlide.description}
    //         </p>
    //         <a
    //           className="service-readmore-link font-face-rr"
    //           onClick={() => goToPage(currentSlide.route)}
    //         >
    //           <BsFillPlusCircleFill />
    //           READ MORE
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="slider-dots">
    //     {slides.map((slide, index) => (
    //       <span
    //         key={index}
    //         className={`dot ${activeSlide === index ? "active" : ""}`}
    //         onClick={() => handleDotClick(index)}
    //       ></span>
    //     ))}
    //   </div>
    // </div>
  );
};

export default ServiceSlider;
