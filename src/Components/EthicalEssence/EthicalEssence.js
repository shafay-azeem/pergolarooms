import React, { useState } from "react";
import "../EthicalEssence/EthicalEssence.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/EthicalEssenceImages/our-principles-newW.webp";
import img2 from "../../assets/EthicalEssenceImages/work-ethics-newW.webp";
import img3 from "../../assets/EthicalEssenceImages/what-we-do-newW.webp";
import img4 from "../../assets/EthicalEssenceImages/our-legacy-newW.webp";

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
    navigate("/about-us/");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
      }}
    >
      <div className="container py-5 px-lg-5">
        <div className="row d-md-flex align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <span className="py-3 mb-2 text-white">OUR PRINCIPLES</span>
            <h4 className="subheading font-face-rr">
              Quality, Customization & Satisfaction
            </h4>
            <p className="description-ethicalessence font-face-rr">
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
            className="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={img1} alt="img1" className="img-fluid" />
          </div>
        </div>

        <div className="row d-md-flex align-items-center mb-5 ethical-second">
          <div
            className="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={img2} alt="img2" className="img-fluid" />
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <span className="py-3 mb-2 text-white">WORK ETHICS</span>
            <h4 className="subheading font-face-rr">
              Integrity and Dedication
            </h4>
            <p className="description-ethicalessence font-face-rr">
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
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000">
            <span className="py-3 mb-2 text-white">WHAT WE DO</span>
            <h4 className="subheading font-face-rr">
              Custom Outdoor Solutions
            </h4>
            <p className="description-ethicalessence font-face-rr">
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
            className="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={img3} alt="img3" className="img-fluid" />
          </div>
        </div>

        <div className="row d-md-flex align-items-center mb-5 ethical-fourth">
          <div
            className="col-md-6 py-3"
            data-aos="fade-up"
            data-aos-duration="1300"
          >
            <img src={img4} alt="img4" className="img-fluid" />
          </div>

          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1200">
            <span className="py-3 mb-2 text-white">Our Legacy</span>
            <h4 className="subheading font-face-rr">Excellence in Designing</h4>
            <p className="description-ethicalessence font-face-rr">
              Our company has a lasting legacy of excellence in designing and
              constructing outdoor spaces that thrive in UAE challenging
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
