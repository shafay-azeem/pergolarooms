import React, { useEffect } from "react";
import "../../Components/Service/BbqArea.css";
import ServiceGallery from "./ServiceGallery";
import ContactForm from "../Contact/ContactForm";
import { useState } from "react";
const CNCPanelCutter = () => {
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
      src: require("../../assets/CncCutPanelImages/8.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/1.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/7.jpg"),
    },

    {
      src: require("../../assets/CncCutPanelImages/2.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/3.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/6.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/4.jpg"),
    },
    {
      src: require("../../assets/CncCutPanelImages/5.jpg"),
    },
  ];
  return (
    <>
      <div className="cncCutPanel">
        <h2 className="text-white text-center py-5 font-face-re">
          CNC CUT PANELS
        </h2>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 py-5">
            <p className="my-0 py-0 font-face-rb">CNC CUT PANELS</p>
            <p className="font-face-rr">Enhance with CNC Cut Panels</p>
            <p className="font-face-rr">
              Introducing our precision-engineered CNC cut panels, the perfect
              addition to your custom pergola design. At PERGOLAROOMS, we
              utilize advanced CNC technology to create intricate and stunning
              patterns on panels, adding a touch of elegance to your outdoor
              space.
            </p>
            <p className="font-face-rr">
              Our skilled craftsmen ensure precise cuts and flawless execution,
              resulting in visually captivating panels that enhance the overall
              aesthetics of your pergola. Elevate your pergola design with our
              CNC cut panels, combining functionality and artistry to create a
              truly unique outdoor experience. Contact us today to explore the
              endless possibilities of our CNC cut panels for your pergola
              project.
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

export default CNCPanelCutter;
