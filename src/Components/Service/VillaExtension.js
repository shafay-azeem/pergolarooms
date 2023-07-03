import React from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import { useEffect } from "react";

const VillaExtension = () => {
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
        <h2 className="text-white text-center py-5 font-face-re">
          VILLA EXTENSION
        </h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">Car Parking Shades</p>
            <p className="font-face-rr">Protect Your Vehicles in Style with Custom Car Parking Shades</p>
            <p className="font-face-rr">
              Shield your vehicles from the elements while adding a touch of elegance to your outdoor space with our bespoke car parking shades. Our expertly designed and crafted shades offer superior protection against sun, rain, and hail,
            </p>
            <p className="font-face-rr">
              ensuring the longevity and pristine condition of your cherished vehicles. With customizable options to suit your specific needs and preferences, our car parking shades seamlessly blend with the aesthetics of your property. Experience peace of mind knowing that your vehicles are sheltered in a stylish and reliable structure. Invest in the durability and functionality of our car parking shades and enjoy the convenience and protection they provide. Safeguard your vehicles today!
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

export default VillaExtension;
