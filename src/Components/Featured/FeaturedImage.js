import React from "react";
import "../Featured/FeaturedImage.css";

const FeaturedImage = () => {

  return (
    <div className="Featured">
      <div className="container-fluid">
        <div className="row">
          <div className="py-5 Featured-Left-Image col-lg-1 col-md-1 shadow">
            <p>facebook logo</p>
            <p>instagram logo</p>
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