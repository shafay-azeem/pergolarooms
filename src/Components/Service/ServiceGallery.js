import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../Service/ServiceGallery.css";

const ServiceGallery = (props) => {
  let imageData = props?.imageData;
  const [data, setData] = useState({ img: "", i: 0 });

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
            top: 0,
            left: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "auto",
            background: "black",
            position: "fixed",
            zIndex: "9999",
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
            <div className="box">
              <img
                key={i}
                src={image.src}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
              />
              <div className="box-content">
                <h3 className="name">{image.text}</h3>
                <span className="post">{image.text}</span>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ServiceGallery;
