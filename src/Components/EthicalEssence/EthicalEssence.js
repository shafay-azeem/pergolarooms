import React, { useState } from "react";
import "../EthicalEssence/EthicalEssence.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/EthicalEssenceImages/Our-principle.png";
import img2 from "../../assets/EthicalEssenceImages/work-ethics.png";
import img3 from "../../assets/EthicalEssenceImages/what-we-do.png";
import img4 from "../../assets/EthicalEssenceImages/our-legacy.png";
import bg from "../../assets/EthicalEssenceImages/BACKGROUND.png";
const EthicalEssence = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/about-us");
  };
  const data = [
    {
      heading: "OUR PRINCIPLES",
      subHeading: "Excellence in Outdoor Living",
      description:
        "At PERGOLAROOMS, our principles are the foundation of our business. With over a decade of expertise, we are dedicated to providing exceptional custom pergolas and outdoor living solutions. Our team upholds the following principles",
      image: require("../../assets/EthicalEssenceImages/our-principles.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WORK ETHICS",
      subHeading: "Exceeding with Integrity, Dedication",
      description:
        "At PERGOLAROOMS, our work ethics form the core of our company culture. With a decade of experience in the industry, we are committed to upholding the highest standards of integrity and dedication. Our team embraces the following work ethics:",
      image: require("../../assets/EthicalEssenceImages/work-ethics.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WHAT WE DO",
      subHeading: "Stunning Custom Spaces",
      description:
        "At PERGOLAROOMS, we specialize in designing and building exquisite custom pergolas and outdoor living spaces that elevate your outdoor experience. With a decade of expertise, we offer a comprehensive range of services tailored to your specific needs:",
      image: require("../../assets/EthicalEssenceImages/what-we-do.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "OUR LEGACY",
      subHeading: "Decade of Excellence",
      description:
        "For over a decade, PERGOLAROOMS has been at the forefront of delivering exceptional custom pergolas and outdoor living solutions. Our legacy is built on a foundation of expertise, innovation, and customer satisfaction. With a passion for craftsmanship.",
      image: require("../../assets/EthicalEssenceImages/our-legacy.jpg"),
      btntext: "READ MORE",
    },
  ];
  return (
    <div
      style={{
        // minHeight: "480px",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container py-5 px-5">
        <div className="row d-md-flex align-items-center ">
          <div class="col-md-6" style={{ paddingRight: "140px" }}>
            <span
              style={{
                marginBottom: "10px",
                fontSize: "12px",
                display: "inline-block",
                color: "white",
              }}
            >
              How It Happens
            </span>
            <h4 class="subheading font-face-rr">
              Excellence in Outdoor Living
            </h4>
            <p class="description-ethicalessence font-face-rr">
              At PERGOLAROOMS, our principles are the foundation of our
              business. With over a decade of expertise, we are dedicated to
              providing exceptional custom pergolas and outdoor living
              solutions. Our team upholds the following principles
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
          <div
            class="col-md-6 p-2"
            style={{
              minHeight: "520px",
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>

      <div className="container py-5 px-5">
        <div className="row d-md-flex align-items-center">
          <div
            class="col-md-6 p-2"
            style={{
              minHeight: "520px",
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div class="col-md-6" style={{ paddingLeft: "140px" }}>
            <span
              style={{
                marginBottom: "10px",
                fontSize: "12px",
                display: "inline-block",
                color: "white",
              }}
            >
              How It Happens
            </span>
            <h4 class="subheading font-face-rr">
              Excellence in Outdoor Living
            </h4>
            <p class="description-ethicalessence font-face-rr">
              At PERGOLAROOMS, our principles are the foundation of our
              business. With over a decade of expertise, we are dedicated to
              providing exceptional custom pergolas and outdoor living
              solutions. Our team upholds the following principles
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <div className="container py-5 px-5">
        <div className="row d-md-flex align-items-center">
          <div class="col-md-6" style={{ paddingRight: "140px" }}>
            <span
              style={{
                marginBottom: "10px",
                fontSize: "12px",
                display: "inline-block",
                color: "white",
              }}
            >
              How It Happens
            </span>
            <h4 class="subheading font-face-rr">
              Excellence in Outdoor Living
            </h4>
            <p class="description-ethicalessence font-face-rr">
              At PERGOLAROOMS, our principles are the foundation of our
              business. With over a decade of expertise, we are dedicated to
              providing exceptional custom pergolas and outdoor living
              solutions. Our team upholds the following principles
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
          <div
            class="col-md-6 p-2"
            style={{
              minHeight: "520px",
              backgroundImage: `url(${img3})`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>

      <div className="container py-5 px-5">
        <div className="row d-md-flex align-items-center">
          <div
            class="col-md-6 p-2"
            style={{
              minHeight: "520px",
              backgroundImage: `url(${img4})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div class="col-md-6 " style={{ paddingLeft: "140px" }}>
            <span
              style={{
                marginBottom: "10px",
                fontSize: "12px",
                display: "inline-block",
                color: "white",
              }}
            >
              How It Happens
            </span>
            <h4 class="subheading font-face-rr">
              Excellence in Outdoor Living
            </h4>
            <p class="description-ethicalessence font-face-rr">
              At PERGOLAROOMS, our principles are the foundation of our
              business. With over a decade of expertise, we are dedicated to
              providing exceptional custom pergolas and outdoor living
              solutions. Our team upholds the following principles
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EthicalEssence;
