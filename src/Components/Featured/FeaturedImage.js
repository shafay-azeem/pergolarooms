import React from "react";
import "../Featured/FeaturedImage.css";
import fbIcon from "../../assets/FeaturedImages/face-icon.png";
import instaIcon from "../../assets/FeaturedImages/insta-icon.png";

const FeaturedImage = () => {

  return (
    <div className="Featured">
      <div className="container-fluid">
        <div className="row">
          <div className="py-5 Featured-Left-Image col-lg-1 col-md-1 shadow">
            <img className="img-fluid" src={fbIcon} alt="fb" />
            <p className="pt-2">Facebook</p>
            <img className="img-fluid" src={instaIcon} alt="insta" />
            <p className="pt-2">Instagram</p>
          </div>
          <div className="py-5 Featured-Right-Image col-lg-11 col-md-11">
            <div className="Feature-Architecture">
              <button className="">Architecture With Meaning</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;