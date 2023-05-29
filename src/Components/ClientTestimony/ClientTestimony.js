import React from "react";
import "../ClientTestimony/ClientTestimony.css";
import ClientTestimonyImg from "../../assets/ClientTestimonyImages/about-us-hero.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientTestimony = () => {
  const testimonyData = [
    {
      id: "1",
      testimonyReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "2",
      testimonyReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "3",
      testimonyReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      testimonyName: "JOSEPH KENT / ARCHITECT",
    },
    {
      id: "4",
      testimonyReview:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
      <section class="page-header">
        <div class="row no-gutter flex-column">
          <img src={ClientTestimonyImg} class="img-fluid" />
        </div>
      </section>

      <section class="scounter">
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row">
                <Slider {...settings}>
                  {testimonyData.map((x, index) => {
                    return (
                      <div className="col-md-12 text-center testimony-card">
                        <p>{x.testimonyReview}</p>

                        <p>{x.testimonyName}</p>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div class="col-md-1"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientTestimony;
