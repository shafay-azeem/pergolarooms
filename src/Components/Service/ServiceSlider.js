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
      imgSrc: require("../../assets/ServiceImages/Image.jpg"),
      heading: "Glass Rooms",
      subheading: "Transform Your Outdoor Space with Stunning Glass Rooms",
      description:
        "Experience the beauty of nature while staying comfortable and protected with our exquisite glass rooms. Designed to seamlessly blend the outdoors with your living space, our customized glass rooms provide a panoramic view of your surroundings.",
      bgcolor: "#6c3433",
      route: "/pergolas-room",
    },
    {
      id: 2,
      imgSrc: require("../../assets/ServiceImages/Image2.jpg"),
      heading: "BBQ Pergola",
      subheading: "Elevate Your Outdoor Cooking Experience with a BBQ Area Pergola",
      description:
        "Create the ultimate culinary haven in your backyard with our custom-designed BBQ area pergolas. Crafted with precision and style, our pergolas provide the perfect shelter for grilling enthusiasts. Enjoy the benefits of shade and protection.",
      bgcolor: "#77736f",
      route: "/pergolas",
    },
    {
      id: 3,
      imgSrc: require("../../assets/ServiceImages/Image3.jpg"),
      heading: "Seating Area Pergola",
      subheading: "Design Your Ideal Outdoor Retreat with a Stunning Sitting Area Pergola",
      description:
        "Discover the perfect combination of style and functionality with our customized sitting area pergolas. Crafted to elevate your outdoor space, our pergolas provide a shaded and inviting sitting area for relaxation, entertainment.",
      bgcolor: "#1A5276",
      route: "/bbq-area",
    },

    {
      id: 4,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Car Parking Shades",
      subheading: "Protect Your Vehicles in Style with Custom Car Parking Shades",
      description:
        "Shield your vehicles from the elements while adding a touch of elegance to your outdoor space with our bespoke car parking shades. Our expertly designed and crafted shades offer superior protection against sun, rain, and hail.",
      bgcolor: "#591e0a",
      route: "/villa-extensions",
    },

    // ----------ADDED MORE--------
    {
      id: 5,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Flooring (Tiling/ WPS Decking/ PVC Decking",
      subheading: "Elevate Your Space with Premium Flooring Solutions: Tiling, WPS Decking, and PVC Decking",
      description:
        "Enhance the beauty and functionality of your space with our exceptional flooring options. Choose from our range of high-quality tiling, WPS decking, and PVC decking solutions to create a stunning and durable surface.",
      bgcolor: "#591e0a",
      // route: "/villa-extensions",
    },
    {
      id: 6,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Aluminium Doors and Windows",
      subheading: "Upgrade Your Space with Sleek and Durable Aluminum Doors & Windows",
      description:
        "Experience the perfect combination of style, functionality, and longevity with our premium aluminum doors and windows. Crafted with precision and attention to detail, our customized solutions offer unmatched durability and aesthetic appeal.",
      bgcolor: "#591e0a",
      // route: "/villa-extensions",
    },
    {
      id: 7,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Aluminium Bifold Doors",
      subheading: "Create a Seamless Transition with Stunning Aluminum Bifold Doors",
      description:
        "Unlock the beauty of indoor-outdoor living with our exquisite aluminum bifold doors. Crafted to perfection, our customized solutions offer a seamless transition between your indoor and outdoor spaces, while adding a touch of sophistication to your home.",
      bgcolor: "#591e0a",
      // route: "/villa-extensions",
    },
    {
      id: 8,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Glass Rails",
      subheading: "Enhance Safety and Style with Stunning Glass Rails",
      description:
        "Experience the perfect balance of safety and elegance with our top-of-the-line glass rails. Customized to suit your unique space, our glass rails offer unobstructed views while providing a secure barrier for staircases, balconies, and terraces.",
      bgcolor: "#591e0a",
      // route: "/villa-extensions",
    },

    {
      id: 9,
      imgSrc: require("../../assets/ServiceImages/Image4.jpg"),
      heading: "Outdoor Gates And Fences",
      subheading: "Secure Your Outdoor Space with Premium Gates and Fences",
      description:
        "Protect your property with our top-quality outdoor gates and fences. Crafted with durability and style in mind, our customized solutions offer reliable security while enhancing the aesthetic appeal of your space.",
      bgcolor: "#591e0a",
      // route: "/villa-extensions",
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
          className="col-md-6 px-0">

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
