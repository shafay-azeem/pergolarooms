import React, { useEffect, useState } from "react";
import "../Service/ServiceSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import ServiceSlider2 from "./ServiceSlider2.js";
import Aos from "aos";
import "aos/dist/aos.css";

const ServiceSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  let buttonText;
  useEffect(() => {
    document.addEventListener("click", function (event) {
      const clickedElement = event.target;
      const parentLi = clickedElement.closest(".slick-dots li");
      if (parentLi) {
        buttonText = parentLi.querySelector("button").textContent;
        console.log(buttonText);
      }
    });
  });

  const slides = [
    {
      id: 1,
      imgSrc: require("../../assets/ServiceImages/glass-rooms.jpg"),
      heading: "Glass Rooms",
      subheading: "Elevate Outdoor Living Experience",
      description:
        "Experience the beauty of nature while staying comfortable and protected with our exquisite glass rooms. Designed to seamlessly blend the outdoors with your living space, our customized glass rooms provide a panoramic view of your surroundings.",
      bgcolor: "#7a5959",
      route: "/glass-rooms",
    },

    {
      id: 2,
      imgSrc: require("../../assets/ServiceImages/pergolas.jpg"),
      heading: "Pergolas",
      subheading: "Transform with custom pergolas.",
      description:
        "Elevate your outdoor space with our exquisite custom pergolas. At Pergola Rooms Contracting LLC, we bring over a decade of expertise in crafting bespoke pergola designs that enhance your lifestyle. Our skilled team of craftsmen creates stunning pergolas using premium materials.",
      bgcolor: "#45636f",
      route: "/pergolas",
    },
    {
      id: 3,
      imgSrc: require("../../assets/ServiceImages/bar-&-bbq.jpg"),
      heading: "Bar & BBQ Counters",
      subheading: "Out Door elegance",
      description:
        "Transform your backyard into the ultimate entertainment spot with our custom-designed Bar & BBQ Counters, exquisitely crafted using high-quality aluminum for unparalleled durability and style. These Bar & BBQ Counters offer the perfect setting for hosting gatherings.",
      bgcolor: "#786050",
      route: "/bbq-area",
    },

    {
      id: 4,
      imgSrc: require("../../assets/ServiceImages/car-parking-pergolas.jpg"),
      heading: "Car Parking Pergolas",
      subheading: "Enhance Vehicle Protection Elegantly",
      description:
        "Shield your vehicles from the elements while adding a touch of elegance to your outdoor space with our bespoke car parking shades. Our expertly designed and crafted shades offer superior protection against sun, rain, and hail.",
      bgcolor: "#725349",
      route: "/car-parking-shades",
    },

    {
      id: 5,
      imgSrc: require("../../assets/ServiceImages/door-&-fences.jpg"),
      heading: "Doors & Fences",
      subheading: "Elevate Space with Aluminum Elegance",
      description:
        "Experience the perfect combination of style, functionality, and longevity with our premium aluminum doors and windows. Crafted with precision and attention to detail, our customized solutions offer unmatched durability and aesthetic appeal.",
      bgcolor: "#394249",
      route: "/aluminium-doors",
    },
    {
      id: 6,
      imgSrc: require("../../assets/ServiceImages/cnc-cut-panels.jpg"),
      heading: "CNC Cut Panels",
      subheading: "Enhance with CNC Cut Panels",
      description:
        "Introducing our precision-engineered CNC cut panels, the perfect addition to your gardens, lounges, villas. At PERGOLAROOMS, we utilize advanced CNC technology to create intricate and stunning patterns on panels, adding a touch of elegance to your outdoor space.",
      bgcolor: "#5c5c5c",
      route: "/cnc-panel-cutter",
    },
  ];

  const navigate = useNavigate();

  const goToPage = () => {
    // console.log()
    if (typeof buttonText === "undefined") {
      navigate("/glass-rooms");
    }
    if (buttonText == 1) {
      navigate("/glass-rooms");
    }
    if (buttonText == 2) {
      navigate("/pergolas");
    }
    if (buttonText == 3) {
      navigate("/bbq-area");
    }
    if (buttonText == 4) {
      navigate("/car-parking-shades");
    }
    if (buttonText == 5) {
      navigate("/aluminium-doors");
    }
    if (buttonText == 6) {
      navigate("/cnc-panel-cutter");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: false,
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
      <div
        style={{ overflow: "hidden" }}
        className="Top-Main container-fluid p-0"
      >
        <Slider {...settings}>
          {slides.map((x, index) => {
            return (
              <div>
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${x.imgSrc})`,
                    backgroundSize: "80%",
                    backgroundRepeat: "no-repeat",
                    height: "450px",
                    backgroundPosition: "top right",
                    backgroundColor: x.bgcolor,
                  }}
                  className="main-Banner"
                >
                  <div className="row">
                    <div className="col-lg-6 textCol">
                      <div className="py-5"></div>

                      <div className="px-3 text-white">
                        <h2>{x.heading}</h2>
                        <p>{x.subheading}</p>
                        <p className="description">{x.description}</p>
                        <a
                          className="service-readmore-link font-face-rr"
                          onClick={() => navigate(x.route)}
                          // data-aos="fade-right"
                          // data-aos-duration="500"
                        >
                          <BsFillPlusCircleFill />
                          READ MORE
                        </a>
                      </div>
                      <div className="py-3"></div>
                    </div>

                    <div className="col-lg-6"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className="info-content">
        <ServiceSlider2 />
      </div>
    </>
  );
};

export default ServiceSlider;
