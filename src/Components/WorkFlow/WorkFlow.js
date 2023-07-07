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

const WorkFlow = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div class="container profile-page py-5">
        <div class="row">
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
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
