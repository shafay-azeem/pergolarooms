import React from "react";
import FeaturedImage from "../src/Components/Featured/FeaturedImage";
import WorkFlow from "../src/Components/WorkFlow/WorkFlow";
import ServiceSlider from "../src/Components/Service/ServiceSlider";
import EthicalEssence from "../src/Components/EthicalEssence/EthicalEssence";
import ClientTestimony from "../src/Components/ClientTestimony/ClientTestimony";
import ContactForm from "../src/Components/Contact/ContactForm";
import ProjectCounter from "./Components/ProjectCounter/ProjectCounter";
import whatsappimg from "./assets/whatsapp.png";
import phoneImg from "./assets/reciever.png";

const HomePage = () => {
  const handleButton = () => {
    var url = "https://wa.me/+971567466996";
    window.open(url);
  };

  const handlePhoneButton = () => {
    window.location.href = "tel:+971567466996";
  };

  return (
    <>
      <div id="">
        <FeaturedImage />
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

      <div>
        <WorkFlow />
      </div>

      <div>
        <ServiceSlider />
      </div>

      <div>
        <EthicalEssence />
      </div>

      <div>
        <ProjectCounter />
      </div>

      <div>
        <ClientTestimony />
      </div>

      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;
