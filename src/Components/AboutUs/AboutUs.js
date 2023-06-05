import React from "react";
import "../AboutUs/AboutUs.css";
import PergolasDesignsImg from "../../assets/AboutUsImages/peRGOLA-aBOUT.jpg";
import ContactForm from "../Contact/ContactForm";

const AboutUs = () => {
  const data = [
    {
      heading: "OUR PRINCIPLES",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/AboutUsImages/4A.jpg"),
    },
    {
      heading: "WORK ETHICS",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/AboutUsImages/3A.jpg"),
    },
    {
      heading: "WHAT WE DO",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/AboutUsImages/2A.jpg"),
    },
    {
      heading: "OUR LEGACY",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/AboutUsImages/1A.jpg"),
    },
  ];

  return (
    <>
      <div className="aboutUs">
        <h2 className="text-white text-center py-5 font-face-re">ABOUT US</h2>
      </div>

      <div className="about-pergolas-designs bg-white container py-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="font-face-rr">PERGOLAS DESIGNS</h2>
            <p className="font-face-rr">
              Pergolas enhance the look of your outdoor space while protecting
              the quality of many items in your garden or patio; for example,
              they shield your outdoor furniture from the sun, dust, and rain. A
              freestanding pergola has many of the same benefits as a patio. Our
              bioclimatic pergolas, retractable roofs, and fixed pergola systems
              are appropriate for both residential and commercial use and
              provide excellent weather protection.
            </p>
          </div>

          <div className="col-lg-6">
            <img className="img-fluid" src={PergolasDesignsImg} alt="" />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h4 className="font-face-rb">WHAT WE DO</h4>
        <p className="font-face-rr">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="about-pergolas-designs bg-white  py-5">
        {data.map((item, i) => (
          <div className="row">
            <div className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-2"}`}>
              <img className="img-fluid" src={item.image} alt="" />
            </div>

            <div className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-1"}`}>
              <h6 className="font-face-rb">{item.heading}</h6>
              <h4 class="font-face-rr">{item.subHeading}</h4>
              <p class="description-ethicalessence text-muted font-face-rr">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default AboutUs;
