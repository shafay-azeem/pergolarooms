import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import whatsappimg from "../../assets/whatsapp.png";
import phoneImg from "../../assets/reciever.png";
import DynamicSeo from "../../utils.seo/DynamicSeo";

const AluDoorWindow = () => {
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
      src: require("../../assets/AliminiumDoorsAndWindowsImages/1.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/5.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/3.jpg"),
      text: "DOORS & FENCES",
    },

    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/6.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/7.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/4.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/8.jpg"),
      text: "DOORS & FENCES",
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/2.jpg"),
      text: "DOORS & FENCES",
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
      <DynamicSeo
        title="Elevate Your Space with Premium Aluminum Doors & Windows"
        description="Elevate your space with premium aluminum doors and windows. Crafted with precision, our solutions offer unmatched durability and aesthetic appeal. Choose from customizable options to suit your unique style. Transform your home or office today."
      />
      <div className="aluWindowsDoors">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className="text-white text-center py-5 font-face-re">
            DOORS & FENCES
          </h2>
        </div>
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
          alt="phoneImg"
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
          alt="whatsappimg"
        />
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">DOORS & FENCES</p>
            <p className="font-face-rr">Elevate Space with Aluminum Elegance</p>
            <p className="font-face-rr">
              The perfect combination of style, functionality, and longevity
              with our premium aluminum doors and windows. Crafted with
              precision and attention to detail, our customized solutions offer
              unmatched durability and aesthetic appeal.
            </p>
            <p className="font-face-rr">
              The sleek design of aluminum doors and windows adds a modern touch
              to any space while providing excellent thermal insulation and
              security. Choose from a wide range of customizable options to suit
              your unique style and architectural requirements. Enhance your
              home or office with our top-of-the-line aluminum doors and
              windows, delivering exceptional performance and elegance that will
              stand the test of time. Transform your space today.
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

export default AluDoorWindow;
