import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Service/ServiceGallery.css";

const ServiceGallery = () => {
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
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
      <Masonry gutter="0px" style={{ marginTop: "20px", marginBottom: "40px" }}>
        {imageData.map((image, i) => (
          <div className="box">
            <div class="box-content">
              <span className="text-white">Image Name</span>
            </div>
            <img
              key={i}
              src={image.src}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ServiceGallery;
