import React from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
import { useEffect } from "react";
import whatsappimg from "../../assets/whatsapp.png";
import phoneImg from "../../assets/reciever.png";

const GlassRooms = () => {
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
      src: require("../../assets/GlassRoomsImages/1.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/5.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/2.jpg"),
      text: "Glass Rooms",
    },

    {
      src: require("../../assets/GlassRoomsImages/6.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/7.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/3.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/8.jpg"),
      text: "Glass Rooms",
    },
    {
      src: require("../../assets/GlassRoomsImages/4.jpg"),
      text: "Glass Rooms",
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
      <div className="glassRooms">
        <h2 className="text-white text-center py-5 font-face-re">
          Glass Rooms
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
            <p className="my-0 py-0 font-face-rb">GLASS ROOMS</p>
            <p className="font-face-rr">
              Transform Your Outdoor Space With Custom Aluminium Glass Rooms
            </p>
            <p className="font-face-rr">
              Experience nature in comfort with our premium glass rooms, perfect
              for GCC's hot and humid climate. Crafted with high-quality,
              heat-resistant glass and durable aluminum frames, our customizable
              glass rooms provide stunning panoramic views while shielding from
              harsh weather.
            </p>
            <p className="font-face-rr">
              Enjoy abundant natural light without compromising on cooling
              efficiency. Create a tranquil home office, cozy reading nook, or
              versatile entertaining area, seamlessly blending indoors with the
              outdoors. Elevate your outdoor living experience and add aesthetic
              appeal to your home. Embrace the perfect harmony of nature and
              modern design with our GCC-adapted glass rooms, offering
              year-round enjoyment and protection from the elements.
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

export default GlassRooms;
