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
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "2",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "3",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "4",
      testimonyReview:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis numquam, minus saepe doloribus ab deserunt voluptatum obcaecati mollitia, veritatis, recusandae consequuntur. Hic non eligendi laboriosam impedit nam? Quibusdam, ab veritatis!",
      testimonyName: "JOSEPH KENT / ARCHITECT",
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
