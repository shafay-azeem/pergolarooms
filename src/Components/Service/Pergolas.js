import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";

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
        <h2 className="text-white text-center py-5 font-face-re">PERGOLAS</h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">BBQ Pergola</p>
            <p className="font-face-rr">Elevate Your Outdoor Cooking Experience with a BBQ Area Pergola</p>
            <p className="font-face-rr">
              Create the ultimate culinary haven in your backyard with our custom-designed BBQ area pergolas. Crafted with precision and style, our pergolas provide the perfect shelter for grilling enthusiasts
            </p>
            <p className="font-face-rr">
              Enjoy the benefits of shade and protection while indulging in the flavors of outdoor cooking. Enhance your outdoor space today with our BBQ area pergolas for an unmatched grilling experience.
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
