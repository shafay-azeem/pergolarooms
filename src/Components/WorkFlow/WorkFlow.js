import React, { useEffect } from "react";
import "../WorkFlow/WorkFlow.css";
import image1 from "../../assets/WorkFlowImages/excellent-black.png";
import image1white from "../../assets/WorkFlowImages/excellent-white.png";
import image2 from "../../assets/WorkFlowImages/high-quality-black.png";
import image2white from "../../assets/WorkFlowImages/high-quality-white.png";
import image3 from "../../assets/WorkFlowImages/3-black.png";
import image3white from "../../assets/WorkFlowImages/3-white.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "../Service/ServiceSlider.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const WorkFlow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container profile-page py-5">
      <Slider {...settings}>
        <div>
          <div className="me-2" data-aos="flip-left" data-aos-duration="1000">
            <div className="card-one profile-header mb-3">
              <div className="py-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="profile-image float-md-right">
                      <img
                        src={image1}
                        alt="image1"
                        className="original-image"
                      />
                      <img
                        src={image1white}
                        alt="image1white"
                        className="hover-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h4 className="m-t-0 m-b-0 mt-2">
                      High Weather Protection
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="me-2" data-aos="flip-left" data-aos-duration="1000">
            <div className="card-two profile-header mb-3">
              <div className="py-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="profile-image float-md-right">
                      <img
                        src={image2}
                        alt="image2"
                        className="original-image"
                      />
                      <img
                        src={image2white}
                        alt="image2white"
                        className="hover-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h4 className="m-t-0 m-b-0 mt-2">High Quality Materials</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="me-2" data-aos="flip-left" data-aos-duration="1000">
            <div className="card-three profile-header mb-3">
              <div className="py-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="profile-image float-md-right">
                      <img
                        src={image3}
                        alt="image3"
                        className="original-image"
                      />
                      <img
                        src={image3white}
                        alt="image3white"
                        className="hover-image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h4 className="m-t-0 m-b-0 mt-2">
                      Safety & Trusted Reliability
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default WorkFlow;
