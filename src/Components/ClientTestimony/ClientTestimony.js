import React from "react";
import "../ClientTestimony/ClientTestimony.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon from "../../assets/ClientTestimonyImages/MArks.png";

const ClientTestimony = () => {
  const testimonyData = [
    {
      id: "1",
      testimonyReview:
        "PergolaRooms transformed my backyard into a paradise! Their exceptional design and craftsmanship exceeded my expectations. Now, I enjoy my outdoor space every day. Thank you, PergolaRooms!",
      testimonyName: "John Doe",
    },
    {
      id: "2",
      testimonyReview:
        "I'm thrilled with the pergola installation by PergolaRooms. It has added elegance and charm to my garden. The team's attention to detail and professionalism made the entire process smooth and enjoyable.",
      testimonyName: "Jane Smith",
    },
    {
      id: "3",
      testimonyReview:
        "My experience with PergolaRooms was fantastic! They took my vision and executed it perfectly. The pergola has become my favorite place to unwind, and I'm grateful for the wonderful work they've done.",
      testimonyName: "Lisa Anderson",
    },
    {
      id: "4",
      testimonyReview:
        "PergolaRooms transformed my outdoor space into a cozy retreat. The attention to detail and commitment to quality were evident throughout the process. I'm extremely pleased with the result.",
      testimonyName: "Sarah Brown",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div id="testimonial-header" className="container-fluid">
        <div className="container py-2">
          <div className="Testi-main row py-5">
            <div className="py-4 bg-white shadow col-lg-8 col-md-12 text-center">
              <img className="img-fluid" src={icon} alt="img" />
              <div className="Test-inner p-5">
                <Slider {...settings}>
                  {testimonyData.map((x, index) => {
                    return (
                      <div key={index} className="">
                        <p className="testimony-review font-face-rr">
                          {x.testimonyReview}
                        </p>
                        <p>
                          <b className="font-face-rb">{x.testimonyName}</b>
                        </p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimony;
