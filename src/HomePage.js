import React from "react";
import NavigationBar from "../src/Components/Miscellaneous/NavigationBar";
import FeaturedImage from "../src/Components/Featured/FeaturedImage";
import WorkFlow from "../src/Components/WorkFlow/WorkFlow";
import Portfolio from "../src/Components/Portfolio/Portfolio";
import ServiceSlider from "../src/Components/Service/ServiceSlider";
import EthicalEssence from "../src/Components/EthicalEssence/EthicalEssence";
import ClientTestimony from "../src/Components/ClientTestimony/ClientTestimony";
import ContactForm from "../src/Components/Contact/ContactForm";
import Footer from "../src/Components/Footer/Footer";
import ProjectCounter from "./Components/ProjectCounter/ProjectCounter";
import whatsappimg from "./assets/whatsapp.png";

const HomePage = () => {
  const handleButton = () => {
    var url = "https://wa.me/+971585799666";
    window.open(url);
  };
  return (
    <>
      <div id="">
        <FeaturedImage />
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

      <div id="">
        <WorkFlow />
      </div>

      <div id="">{/* <Portfolio /> */}</div>

      <div id="">
        <ServiceSlider />
      </div>

      <div id="">
        <EthicalEssence />
      </div>

      <div id="">
        <ProjectCounter />
      </div>

      <div id="">
        <ClientTestimony />
      </div>

      <div id="contact-us">
        <ContactForm />
      </div>
    </>
  );
};

export default HomePage;
