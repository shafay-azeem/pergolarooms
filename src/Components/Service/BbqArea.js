import React from "react";

import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import { useEffect } from "react";
import whatsappimg from "../../assets/whatsapp.png";
import phoneImg from "../../assets/reciever.png";

const BbqArea = () => {
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
      src: require("../../assets/BBQAreaImages/1.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/5.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/2.jpg"),
      text: "BAR COUNTERS",
    },

    {
      src: require("../../assets/BBQAreaImages/6.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/7.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/3.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/8.jpg"),
      text: "BAR COUNTERS",
    },
    {
      src: require("../../assets/BBQAreaImages/4.jpg"),
      text: "BAR COUNTERS",
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
      <div className="BBQ-Area">
        <h2 className="text-white text-center py-5 font-face-re">
          BAR COUNTERS
        </h2>
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
            <p className="my-0 py-0 font-face-rb">BAR COUNTERS</p>
            {/* <p className="font-face-rr">
              Elevate Your Outdoor Cooking Experience with a BBQ Area Pergola
            </p> */}
            <p className="font-face-rr">
              Transform your backyard into the ultimate entertainment spot with
              our custom-designed bar counters, exquisitely crafted using
              high-quality aluminum for unparalleled durability and style. These
              bar counters offer the perfect setting for hosting gatherings,
              where you can enjoy refreshing drinks and socialize in the great
              outdoors.
            </p>
            <p className="font-face-rr">
              Embrace the benefits of shaded comfort and protection while
              savoring the flavors of your favorite beverages. Elevate your
              outdoor space today with our exceptional bar counters, built to
              withstand the elements while providing an unmatched experience for
              you and your guests.
            </p>

            <p className="font-face-rr">
              With precision engineering and the use of high-quality aluminum,
              our bar counters are not only stylish but also built to last.
              Experience the epitome of outdoor entertainment and create
              cherished memories in your custom outdoor bar area. Cheers to the
              perfect blend of luxury and functionality with our top-of-the-line
              bar counters!
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

export default BbqArea;
