import React from "react";
import "../AboutUs/AboutUs.css";
import PergolasDesignsImg from "../../assets/AboutUsImages/peRGOLA-aBOUT.jpg";
import ContactForm from "../Contact/ContactForm";
import { useEffect } from "react";
import { useState } from "react";

const AboutUs = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   function handleResize() {
  //     setScreenDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     });
  //   }
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  const data = [
    {
      heading: "OUR PRINCIPLES",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam cumque minima quod maxime tempora iure nemo quis quaerat ex delectus nostrum et vero nesciunt omnis cupiditate labore eum, ab ducimus quo esse deleniti molestias dicta! Dicta amet quaerat quia aut minus iusto ullam.",
      image: require("../../assets/AboutUsImages/4A.jpg"),
    },
    {
      heading: "WORK ETHICS",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam cumque minima quod maxime tempora iure nemo quis quaerat ex delectus nostrum et vero nesciunt omnis cupiditate labore eum, ab ducimus quo esse deleniti molestias dicta! Dicta amet quaerat quia aut minus iusto ullam.",
      image: require("../../assets/AboutUsImages/3A.jpg"),
    },
    {
      heading: "WHAT WE DO",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam cumque minima quod maxime tempora iure nemo quis quaerat ex delectus nostrum et vero nesciunt omnis cupiditate labore eum, ab ducimus quo esse deleniti molestias dicta! Dicta amet quaerat quia aut minus iusto ullam.",
      image: require("../../assets/AboutUsImages/2A.jpg"),
    },
    {
      heading: "OUR LEGACY",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      subDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam cumque minima quod maxime tempora iure nemo quis quaerat ex delectus nostrum et vero nesciunt omnis cupiditate labore eum, ab ducimus quo esse deleniti molestias dicta! Dicta amet quaerat quia aut minus iusto ullam.",
      image: require("../../assets/AboutUsImages/1A.jpg"),
    },
  ];

  return (
    <>
      <div className="aboutUs">
        <h2 className="text-white text-center py-5 font-face-re">ABOUT US</h2>
      </div>

      <div className="about-pergolas-designs container-fluid px-lg-5 py-5">
        <div className="row px-lg-5">
          <div className="col-lg-6">
            <h2 className="font-face-rr pt-lg-5">PERGOLAS DESIGNS</h2>
            <hr></hr>
            <p className="font-face-rr">
              Pergolas enhance the look of your outdoor space while protecting
              the quality of many items in your garden or patio; for example,
              they shield your outdoor furniture from the sun, dust, and rain. A
              freestanding pergola has many of the same benefits as a patio. Our
              bioclimatic pergolas, retractable roofs, and fixed pergola systems
              are appropriate for both residential and commercial use and
              provide excellent weather protection.
            </p>
            <p className="font-face-rr">
              Pergolas enhance the look of your outdoor space while protecting
              the quality of many items in your garden or patio; for example,
              they shield your outdoor furniture from the sun, dust, and rain. A
              freestanding pergola has many of the same benefits as a patio. Our
              bioclimatic pergolas, retractable roofs, and fixed pergola systems
              are appropriate for both residential and commercial use and
              provide excellent weather protection.
            </p>
            <p className="font-face-rr">BBQ AREA | GLASS ROOM | PERGOLAS | VILLA EXTENSION /PATIO</p>
          </div>

          <div className="col-lg-6">
            <img className="img-fluid" src={PergolasDesignsImg} alt="" />
          </div>
        </div>
      </div>

      <div className="container text-center">
        <h4 className="font-face-rb">WHAT WE DO</h4>
        <hr class="hr-style"></hr>
        <p className="font-face-rr py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <div className="about-pergolas-designs py-5">
        {data.map((item, i) => (
          <div className="container-fluid">
            <div className="row d-flex align-items-center">
              <div className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-2"} bg-cover`} style={{
                backgroundImage: `url(${item.image})`,

              }}>
              </div>

              <div className={`col-lg-6${i % 2 === 0 ? "" : " order-lg-1"} `}>
                <div className="inner p-md-3 p-2">
                  <h5 className="font-face-rb">{item.heading}</h5>
                  <h3 style={{ fontWeight: '400' }} class="font-face-rr pb-3">{item.subHeading}</h3>
                  <p class="description-ethicalessence text-muted font-face-rr">
                    {item.description}
                  </p>
                  <p class="description-ethicalessence text-muted font-face-rr">
                    {item.subDescription}
                  </p>
                </div>

              </div>
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