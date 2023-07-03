import React from "react";

import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import { useEffect } from "react";

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
      src: require("../../assets/ServiceImages/i1.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i3.avif"),
    },

    {
      src: require("../../assets/ServiceImages/i4.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i1.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i2.avif"),
    },
    {
      src: require("../../assets/ServiceImages/i3.avif"),
    },
  ];
  return (
    <>
      <div className="BBQ-Area">
        <h2 className="text-white text-center py-5 font-face-re">BBQ AREA</h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">Seating Area Pergola</p>
            <p className="font-face-rr">Design Your Ideal Outdoor Retreat with a Stunning Sitting Area Pergola</p>
            <p className="font-face-rr">
              Discover the perfect combination of style and functionality with our customized sitting area pergolas. Crafted to elevate your outdoor space, our pergolas provide a shaded and inviting sitting area for relaxation, entertainment, and enjoying the beauty of nature
            </p>
            <p className="font-face-rr">
              With attention to detail and quality craftsmanship, our pergolas are tailored to your specific needs, reflecting your unique style and enhancing your home's aesthetic appeal. Create a cozy retreat where you can unwind, entertain guests, or simply bask in the serenity of your surroundings. Experience the ultimate outdoor comfort with our exquisite sitting area pergolas. Transform your outdoor living space today and make every moment unforgettable.
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
