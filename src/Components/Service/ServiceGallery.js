import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Service/ServiceGallery.css";

const ServiceGallery = () => {
  const imageData = [
    {
      src: require("../../assets/ServiceImages/home3-image1.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home3-image3-890x664.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home3-image4-890x664.jpg"),
    },

    {
      src: require("../../assets/ServiceImages/home3-image5-890x664.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/portfolio-grid-image1-890x664.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home2-image11.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home2-image7-890x664.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home3-image7-890x664.jpg"),
    },
    {
      src: require("../../assets/ServiceImages/home3-image9.jpg"),
    },
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry gutter="10px">
        {imageData.map((image, i) => (
          <img key={i} src={image.src} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default ServiceGallery;
