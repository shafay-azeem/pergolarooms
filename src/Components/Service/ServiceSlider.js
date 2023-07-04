import React, { useState } from "react";
import "../Service/ServiceSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ServiceSlider = () => {
  const slides = [
    {
      id: 1,
      imgSrc: require("../../assets/ServiceImages/glassRoomImg.jpg"),
      heading: "Glass Rooms",
      subheading: "Elevate Outdoor Living Experience",
      description:
        "Experience the beauty of nature while staying comfortable and protected with our exquisite glass rooms. Designed to seamlessly blend the outdoors with your living space, our customized glass rooms provide a panoramic view of your surroundings.",
      bgcolor: "#6c3433",
      route: "/glass-rooms",
    },

    {
      id: 2,
      imgSrc: require("../../assets/ServiceImages/Untitled-2.jpg"),
      heading: "Pergolas",
      subheading: "Transform with custom pergolas.",
      description:
        "Elevate your outdoor space with our exquisite custom pergolas. At PERGOLAROOMS, we bring over a decade of expertise in crafting bespoke pergola designs that enhance your lifestyle. Our skilled team of craftsmen creates stunning pergolas using premium materials, tailored to your unique style and preferences.",
      bgcolor: "#37280e",
      route: "/pergolas",
    },
    {
      id: 3,
      imgSrc: require("../../assets/ServiceImages/bbqImg.jpg"),
      heading: "Bar & BBQ Counter",
      subheading: "Enhance Grilling Oasis Bliss",
      description:
        "Create the ultimate culinary haven in your backyard with our custom-designed BBQ area pergolas. Crafted with precision and style, our pergolas provide the perfect shelter for grilling enthusiasts. Enjoy the benefits of shade and protection.",
      bgcolor: "#77736f",
      route: "/bbq-area",
    },

    {
      id: 4,
      imgSrc: require("../../assets/ServiceImages/carparkingShadesImg.jpg"),
      heading: "Car Parking Pergolas",
      subheading: "Enhance Vehicle Protection Elegantly",
      description:
        "Shield your vehicles from the elements while adding a touch of elegance to your outdoor space with our bespoke car parking shades. Our expertly designed and crafted shades offer superior protection against sun, rain, and hail.",
      bgcolor: "#591e0a",
      route: "/car-parking-shades",
    },

    {
      id: 5,
      imgSrc: require("../../assets/ServiceImages/AluminiumdoorsImg.jpg"),
      heading: "Aluminium Doors and Windows",
      subheading: "Elevate Space with Aluminum Elegance",
      description:
        "Experience the perfect combination of style, functionality, and longevity with our premium aluminum doors and windows. Crafted with precision and attention to detail, our customized solutions offer unmatched durability and aesthetic appeal.",
      bgcolor: "#570b34",
      // route: "/villa-extensions",
    },

    {
      id: 6,
      imgSrc: require("../../assets/ServiceImages/CncCutPanels.png"),
      heading: "CNC Cut Panels",
      subheading: "Enhance with CNC Cut Panels",
      description:
        "Introducing our precision-engineered CNC cut panels, the perfect addition to your custom pergola design. At PERGOLAROOMS, we utilize advanced CNC technology to create intricate and stunning patterns on panels, adding a touch of elegance to your outdoor space.",
      bgcolor: "#babc72",
      route: "/cnc-panel-cutter",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  const currentSlide = slides[activeSlide];

  const navigate = useNavigate();

  const goToPage = (route) => {
    navigate(route);
  };

  return (
    <div className="Service container-fluid">
      <div className="row">
        <div
          // style={{
          //   backgroundImage: `url(${currentSlide.imgSrc})`,
          //   backgroundPosition: 'center',
          //   backgroundSize: 'cover',
          //   minHeight: '500px'
          // }}
          className="col-md-6 px-0"
        >
          <img
            src={currentSlide.imgSrc}
            className="img-fluid"
            alt="Service Image"
          />
        </div>
        <div
          className="col-md-6 px-0"
          style={{ backgroundColor: currentSlide.bgcolor }}
        >
          <div className="service-content">
            <h5 className="font-face-rb">{currentSlide.heading}</h5>
            <p className="content-subheading font-face-rr">
              {currentSlide.subheading}
            </p>
            <p className="content-description font-face-rr">
              {currentSlide.description}
            </p>
            <a
              className="service-readmore-link font-face-rr"
              // href={currentSlide.route}
              onClick={() => goToPage(currentSlide.route)}
            >
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className="slider-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${activeSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
