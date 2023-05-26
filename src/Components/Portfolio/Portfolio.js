import React from "react";
import "../Portfolio/Portfolio.css";
import PortfolioSlider from "./PortfolioSlider";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Portfolio = () => {
  return (
    <div className="portfolio container-fluid">
      <div className="container">
        <div className="row py-5 d-md-flex align-items-center">
          <div className="col-md-6">
            <h5 className="portfolio-heading">MODERN WORLD EXTERIORS</h5>
            <p className="portfolio-subheading">PERGOLAS DESIGNS</p>
          </div>
          <div className="col-md-6">
            <p className="portfolio-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nihil perferendis quidem, voluptatum assumenda fugit cum sequi hic repudiandae est recusandae harum inventore reiciendis ipsam sit animi maxime corrupti ipsum similique. Maxime temporibus dolorum minima velit ullam sapiente enim, esse optio, nihil eius itaque amet deleniti voluptates accusamus rerum, quam maiores odit quiz.
            </p>
            <p className="text-white">BBQ AREAS GLASS ROOMS</p>
            <a className="portfolio-link">
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