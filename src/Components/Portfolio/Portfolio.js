import React from "react";
import "../Portfolio/Portfolio.css";
import PortfolioSlider from "./PortfolioSlider";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const goToAboutUs = () => {
    navigate("/about-us");
  };
  return (
    <div className="portfolio container-fluid">
      <div className="container">
        <div className="row py-5 d-md-flex">
          <div className="col-md-6">
            <h4 className="portfolio-heading text-start font-face-rb">
              MODERN WORLD EXTERIORS
            </h4>
            <p className="portfolio-subheading text-start font-face-rl">
              PERGOLAS DESIGNS
            </p>
          </div>
          <div className="col-md-6">
            {/* <h3 className="text-white font-face-rr">Elevate Your Outdoor Cooking Experience with a BBQ Area Pergola:</h3> */}
            <p className="portfolio-description font-face-rr">
              Create the ultimate culinary haven in your backyard with our
              custom-designed BBQ area pergolas. Crafted with precision and
              style, our pergolas provide the perfect shelter for grilling
              enthusiasts. Enjoy the benefits of shade and protection while
              indulging in the flavors of outdoor cooking. Enhance your outdoor
              space today with our BBQ area pergolas for an unmatched grilling
              experience
            </p>
            <p className="text-white font-face-rr">BBQ AREAS GLASS ROOMS</p>
            <a className="portfolio-link font-face-rr" onClick={goToAboutUs}>
              <BsFillPlusCircleFill />
              READ MORE
            </a>
          </div>
        </div>
      </div>

      <PortfolioSlider />
    </div>
  );
};

export default Portfolio;
