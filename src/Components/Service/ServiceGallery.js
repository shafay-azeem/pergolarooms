import React, { useState } from "react";
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

  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imageAction = (action) => {
    let i = data.i;
    if (action === "next-img" && i < imageData.length - 1) {
      setData({ img: imageData[i + 1].src, i: i + 1 });
    }
    if (action === "previous-img" && i > 0) {
      setData({ img: imageData[i - 1].src, i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            style={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={() => imageAction()}
          >
            X
          </button>
          {data.i > 0 && (
            <button onClick={() => imageAction("previous-img")}>
              Previous
            </button>
          )}
          <img
            src={data.img}
            style={{ width: "auto", maxWidth: "90%", maxHeight: "990%" }}
          />
          {data.i < imageData.length - 1 && (
            <button onClick={() => imageAction("next-img")}>Next</button>
          )}
        </div>
      )}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="0px">
          {imageData.map((image, i) => (
            <img
              key={i}
              src={image.src}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
              onClick={() => viewImage(image.src, i)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ServiceGallery;
