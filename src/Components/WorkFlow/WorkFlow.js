import React from "react";
import "../WorkFlow/WorkFlow.css";
import img1 from "../../assets/WorkFlowImages/icons-1.png";
import img2 from "../../assets/WorkFlowImages/icons-2.png";
import img3 from "../../assets/WorkFlowImages/icons-3.png";
import img4 from "../../assets/WorkFlowImages/icons-4.png";

const WorkFlow = () => {
  return (
    <>
      <section class="workflow-section">
        <div class="container">
          <div class="row ">
            <div class="col-12 col-md-6 col-lg-3 ">
              <div className="workflow-box">
                <img src={img1} class="img-fluid " alt="" />
                <h5>Planning Stage</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="workflow-box">
                <img src={img2} class="img-fluid" alt="" />
                <h5>Exterior Design</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="workflow-box">
                <img src={img3} class="img-fluid" alt="" />
                <h5>Building Stage</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3">
              <div className="workflow-box">
                <img src={img4} class="img-fluid" alt="" />
                <h5>Pro Support</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFlow;
