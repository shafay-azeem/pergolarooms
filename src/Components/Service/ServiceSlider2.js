import React from "react";
import "../Service/ServiceSlider2.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useEffect } from "react";

const ServiceSlider2 = () => {
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
        "Elevate your outdoor space with our exquisite custom pergolas. At Pergola Rooms Contracting LLC, we bring over a decade of expertise in crafting bespoke pergola designs that enhance your lifestyle. Our skilled team of craftsmen creates stunning pergolas using premium materials, tailored to your unique style and preferences.",
      bgcolor: "#45636f",
      route: "/pergolas",
    },
    {
      id: 3,
      imgSrc: require("../../assets/ServiceImages/bar-&-bbq.jpg"),
      heading: "Bar Counters",
      subheading: "Out Door elegance",
      description:
        "Transform your backyard into the ultimate entertainment spot with our custom-designed bar counters, exquisitely crafted using high-quality aluminum for unparalleled durability and style. These bar counters offer the perfect setting for hosting gatherings, where you can enjoy refreshing drinks and socialize in the great outdoors.",
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
      <div
        style={{ overflow: "hidden" }}
        className="Top-Main2 container-fluid p-0"
      >
        <Slider {...settings}>
          {slides.map((x, index) => {
            return (
              <div>
                <div key={index} className="main-Banner2 py-5">
                  <div className="container text-center text-white">
                    <h2>{x.heading}</h2>
                    <p>{x.subheading}</p>
                    <p>{x.description}</p>
                    <a
                      className="service-readmore-link font-face-rr read-btn"
                      onClick={() => goToPage(x.route)}
                    >
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
  );
};

export default ServiceSlider2;
