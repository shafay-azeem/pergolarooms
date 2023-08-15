import React, { useEffect, useState } from "react";
import "../EthicalEssence/EthicalEssence.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/EthicalEssenceImages/our-principles-new.png";
import img2 from "../../assets/EthicalEssenceImages/work-ethics-new.png";
import img3 from "../../assets/EthicalEssenceImages/what-we-do-new.png";
import img4 from "../../assets/EthicalEssenceImages/our-legacy-new.png";

import "aos/dist/aos.css";

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
        // backgroundImage: `url(${bg})`,
        backgroundColor: "black",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-5 px-lg-5">
        <div className="row d-md-flex align-items-center mb-5">
          <div class="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <span className="py-3 mb-2 text-white">OUR PRINCIPLES</span>
            <h4 class="subheading font-face-rr">
              Quality, Customization & Satisfaction
            </h4>
            <p class="description-ethicalessence font-face-rr">
              At Pergolarooms, we are driven by three core principles that
              define our commitment to delivering exceptional outdoor living
              solutions. Our foundation is built on excellence, ensuring
              top-notch craftsmanship and premium materials in every project.
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
          <div
            class="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={img1} alt="1" className="img-fluid" />
          </div>
        </div>

        <div className="row d-md-flex align-items-center mb-5 ethical-second">
          <div
            class="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={img2} alt="1" className="img-fluid" />
          </div>

          <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <span className="py-3 mb-2 text-white">WORK ETHICS</span>
            <h4 class="subheading font-face-rr">Integrity and Dedication</h4>
            <p class="description-ethicalessence font-face-rr">
              Our work ethics form the bedrock of our company culture. With a
              decade of industry experience, we are committed to upholding the
              highest standards of integrity, excellence, and dedication. Our
              team adheres to these core values throughout every project,
              ensuring that our customers receive the utmost professionalism and
              quality.
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>

        <div className="row d-md-flex align-items-center mb-5">
          <div class="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <span className="py-3 mb-2 text-white">WHAT WE DO</span>
            <h4 class="subheading font-face-rr">Custom Outdoor Solutions</h4>
            <p class="description-ethicalessence font-face-rr">
              At Pergolarooms, we are experts in designing and constructing
              bespoke pergolas, and glass rooms, providing a seamless blend of
              indoor and outdoor living. Our skilled craftsmen specialize in
              crafting functional and aesthetically pleasing BBQ areas and bar
              counters.
            </p>
            <a className="readmore-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>

          <div
            class="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={img3} alt="1" className="img-fluid" />
          </div>
        </div>

        <div className="row d-md-flex align-items-center mb-5 ethical-fourth">
          <div
            class="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <img src={img4} alt="1" className="img-fluid" />
          </div>

          <div class="col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <span className="py-3 mb-2 text-white">Our Legacy</span>
            <h4 class="subheading font-face-rr">Excellence in Designing</h4>
            <p class="description-ethicalessence font-face-rr">
              Our company has a lasting legacy of excellence in designing and
              constructing outdoor spaces that thrive in Dubai's challenging
              climate. With our technical expertise, we create custom pergolas,
              and glass rooms that withstand the heat, sandstorms, and high
              humidity.
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
