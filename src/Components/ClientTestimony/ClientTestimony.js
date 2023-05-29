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
      {/* <section class="page-header">
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
      </section> */}

      <div id="testimonial-header" className="container-fluid">
        <div className="container">
          <div className="row py-5 d-flex flex-column align-items-center justify-content-between">
            <div className="Testimoni-first col-lg-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in magnam ipsa quas enim consequuntur, omnis eum non accusamus eos.
            </div>
            <div className="py-5 bg-white shadow col-lg-8 col-md-12 text-center">
              <div className="Test-inner p-5">
                <Slider {...settings}>
                  {testimonyData.map((x, index) => {
                    return (
                      <div key={index} className="">
                        <p>{x.testimonyReview}</p>
                        <p><b>{x.testimonyName}</b></p>
                      </div>
                    )
                  })}
                </Slider>
              </div>

            </div>
            <div className="d-none col-lg-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, accusantium. Libero temporibus consectetur dolorum. Fugiat at modi labore ipsam quo laudantium! Ipsum hic nostrum blanditiis sint magnam necessitatibus laboriosam quae soluta exercitationem commodi?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientTestimony;