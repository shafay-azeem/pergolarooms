import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import whatsappimg from "../../assets/whatsapp.png";
import phoneImg from "../../assets/reciever.png";

const Pergolas = () => {
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    function handleResize() {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const imageData = [
    {
      src: require("../../assets/pergolas/1.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/5.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/2.jpg"),
      text: "Pergolas",
    },

    {
      src: require("../../assets/pergolas/6.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/7.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/3.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/8.jpg"),
      text: "Pergolas",
    },
    {
      src: require("../../assets/pergolas/4.jpg"),
      text: "Pergolas",
    },
  ];
  const handleButton = () => {
    var url = "https://wa.me/+971585799666";
    window.open(url);
  };

  const handlePhoneButton = () => {
    window.location.href = "tel:+971585799666";
  };
  return (
    <>
      <div className="pergolas">
        <h2 className="text-white text-center py-5 font-face-re">PERGOLAS</h2>
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          zIndex: "9999",
          height: "50px",
          width: "50px",
        }}
      >
        <img
          src={phoneImg}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={handlePhoneButton}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "10px",
          right: "20px",
          zIndex: "9999",
          height: "50px",
          width: "50px",
        }}
      >
        <img
          src={whatsappimg}
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          onClick={handleButton}
        />
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">Pergolas</p>
            <p className="font-face-rr">Transform with custom pergolas</p>
            <p className="font-face-rr">
              Elevate your outdoor space with our exquisite custom pergolas.
              Pergola Rooms Building Contracting LLC, we bring over a decade of
              expertise in crafting bespoke pergola designs that enhance your
              lifestyle. Our skilled team of craftsmen creates stunning pergolas
              using premium materials, tailored to your unique style and
              preferences.
            </p>
            <p className="font-face-rr">
              Whether you envision a classic pergola or a contemporary aluminum
              structure, we have the expertise to make your dream a reality.
              Trust Pergolarooms for exceptional craftsmanship and unparalleled
              outdoor transformations. Contact us today to discuss your project
              and turn your outdoor space into a captivating oasis of beauty and
              relaxation.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>

      <ServiceGallery imageData={imageData} />
      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default Pergolas;
