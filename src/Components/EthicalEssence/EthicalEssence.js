import React, { useState } from "react";
import "../EthicalEssence/EthicalEssence.css";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

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
      subHeading: "Delivering Excellence in Custom Pergolas and Outdoor Living Solutions.",
      description:
        "At PERGOLAROOMS, our principles are the foundation of our business. With over a decade of expertise, we are dedicated to providing exceptional custom pergolas and outdoor living solutions. Our team upholds the following principles",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WORK ETHICS",
      subHeading: "Exceeding Expectations with Integrity and Dedication",
      description:
        "At PERGOLAROOMS, our work ethics form the core of our company culture. With a decade of experience in the industry, we are committed to upholding the highest standards of integrity and dedication. Our team embraces the following work ethics:",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WHAT WE DO",
      subHeading: "Creating Stunning Custom Pergolas and Outdoor Living Spaces",
      description:
        "At PERGOLAROOMS, we specialize in designing and building exquisite custom pergolas and outdoor living spaces that elevate your outdoor experience. With a decade of expertise, we offer a comprehensive range of services tailored to your specific needs:",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "OUR LEGACY",
      subHeading: "A Decade of Excellence in Custom Pergolas and Outdoor Living",
      description:
        "For over a decade, PERGOLAROOMS has been at the forefront of delivering exceptional custom pergolas and outdoor living solutions. Our legacy is built on a foundation of expertise, innovation, and customer satisfaction. With a passion for craftsmanship.",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
  ];
  return (
    <div className="container-fluid mb-5">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <div className="title-inner container px-5">
                <h5 className="py-5 font-face-rr">{item.heading}</h5>
                <span>{selected == i ? "-" : "+"}</span>
              </div>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              <div className="container py-5 px-5">
                <div className="row d-md-flex align-items-center">
                  <div class="col-md-6">
                    <h4 class="subheading py-4 font-face-rr">
                      {item.subHeading}
                    </h4>
                    <p class="description-ethicalessence text-muted font-face-rr">
                      {item.description}
                    </p>
                    <a
                      className="readmore-link font-face-rr"
                      onClick={goToAboutUs}
                    >
                      <BsFillPlusCircleFill />
                      {item.btntext}
                    </a>
                  </div>
                  <div class="col-md-6 p-2">
                    <img src={item.image} class="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthicalEssence;
