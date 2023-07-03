import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
const PergolasRoom = () => {
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
          PERGOLAS ROOM
        </h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">Glass Rooms</p>
            <p className="font-face-rr">Transform Your Outdoor Space with Stunning Glass Rooms</p>
            <p className="font-face-rr">
              Experience the beauty of nature while staying comfortable and protected with our exquisite glass rooms. Designed to seamlessly blend the outdoors with your living space, our customized glass rooms provide a panoramic view of your surroundings.
            </p>
            <p className="font-face-rr">
              Enjoy natural light, stunning vistas, and a sense of openness like never before. Whether you want to create a cozy reading nook, a tranquil home office, or a versatile entertaining area, our glass rooms offer endless possibilities. Elevate your outdoor living experience with our premium glass rooms, expertly crafted to enhance your home's aesthetic appeal and provide year-round enjoyment. Discover the perfect harmony of nature and modern design today.
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

export default PergolasRoom;
