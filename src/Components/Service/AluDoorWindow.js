import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
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
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/5.jpg"),
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/3.jpg"),
    },

    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/6.jpg"),
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/7.jpg"),
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/4.jpg"),
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/8.jpg"),
    },
    {
      src: require("../../assets/AliminiumDoorsAndWindowsImages/2.jpg"),
    },
  ];
  return (
    <>
      <div className="aluWindowsDoors">
        <h2 className="text-white text-center py-5 font-face-re">
          ALUMINIUM DOORS AND WINDOWS
        </h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">
              ALUMINIUM DOORS AND WINDOWS
            </p>
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