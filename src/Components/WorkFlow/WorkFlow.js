import React, { useEffect, useState } from "react";
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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   fade: true,
  //   slidesToScroll: 1,
  //   cssEase: "linear",
  //   centerPadding: "0px",
  //   pauseOnHover: false,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: true,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // For screens below 768px width (mobile screens)
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
    <>
      <div class="container profile-page py-5">
        {/* <div class="row">
          <Slider {...settings}>
            <div
              class="col-xl-4 col-lg-4 col-md-12 col-sm-12"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div class="card-one profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image1} alt="" class="original-image" />
                        <img src={image1white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">High Weather Protection</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-xl-4 col-lg-4 col-md-12 col-sm-12"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div class="card-two profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image2} alt="" class="original-image" />
                        <img src={image2white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">High Quality Materials</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              class="col-xl-4 col-lg-4 col-md-12 col-sm-12"
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              <div class="card-three profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image3} alt="" class="original-image" />
                        <img src={image3white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">
                        Safety & Trusted Reliability
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div> */}
        <Slider {...settings}>
          <div>
            <div class="me-2" data-aos="flip-left" data-aos-duration="1000">
              <div class="card-one profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image1} alt="" class="original-image" />
                        <img src={image1white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">High Weather Protection</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="me-2" data-aos="flip-left" data-aos-duration="1000">
              <div class="card-two profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image2} alt="" class="original-image" />
                        <img src={image2white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">High Quality Materials</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="me-2" data-aos="flip-left" data-aos-duration="1000">
              <div class="card-three profile-header mb-3">
                <div class="py-4">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-12">
                      <div class="profile-image float-md-right">
                        <img src={image3} alt="" class="original-image" />
                        <img src={image3white} alt="" class="hover-image" />
                      </div>
                    </div>
                    <div class="col-lg-8 col-md-8 col-12">
                      <h4 class="m-t-0 m-b-0 mt-2">
                        {" "}
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
    </>
  );
};

export default WorkFlow;
