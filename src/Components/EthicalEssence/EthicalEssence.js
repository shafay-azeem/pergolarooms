import React, { useState } from "react";
import "../EthicalEssence/EthicalEssence.css";
import imgagedemo from "../../assets/EthicalEssenceImages/iMAGE-1.jpg";

const EthicalEssence = () => {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const data = [
    {
      heading: "OUR PRINCIPLES",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WORK ETHICS",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "WHAT WE DO",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
    {
      heading: "OUR LEGACY",
      subHeading: "WE COMMIT TO BIG IDEAS",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: require("../../assets/EthicalEssenceImages/iMAGE-1.jpg"),
      btntext: "READ MORE",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="accordian">
        {data.map((item, i) => (
          <div className="item" key={i}>
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.heading}</h2>
              <span>{selected == i ? "-" : "+"}</span>
            </div>
            <div className={selected == i ? "content show" : "content"}>
              <div className="row">
                <div class="col-md-6">
                  <h4 class="subheading">{item.subHeading}</h4>
                  <p class="text-muted">{item.description}</p>
                </div>
                <div class="col-md-6 p-5">
                  <img src={item.image} class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthicalEssence;
