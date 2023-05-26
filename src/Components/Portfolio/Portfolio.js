import React from "react";
import "../Portfolio/Portfolio.css";
import PortfolioSlider from "./PortfolioSlider";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="row">
        <div className="col-md-6 py-5">
          <h5 className="portfolio-heading">MODERN WORLD EXTERIORS</h5>
          <p className="portfolio-subheading">PERGOLAS DESIGNS</p>
        </div>
        <div className="col-md-6 py-5 ">
          <p className="portfolio-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <a className="portfolio-link">
            <BsFillPlusCircleFill />
            READ MORE
          </a>
        </div>
      </div>
      <PortfolioSlider />
    </div>
  );
};

export default Portfolio;
