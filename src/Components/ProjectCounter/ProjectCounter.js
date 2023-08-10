import React, { useEffect } from "react";
import "../ProjectCounter/ProjectCounter.css";
import CountUp from "react-countup";
import projectCompleted from "../../assets/ProjectCounterImages/project-completed.png";
import satisfiedClients from "../../assets/ProjectCounterImages/satisfied-clients.png";
import teamMembers from "../../assets/ProjectCounterImages/team-members.png";
import totalBranches from "../../assets/ProjectCounterImages/total-branches.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectCounter = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div class="container p-5">
      <div class="row text-center">
        <div class="col-md-3 col-6">
          <div class="counter">
            <img src={projectCompleted} className="img-fluid" />
            <h2 class="count-title">
              <CountUp
                start={0}
                end={150}
                duration={2}
                style={{ color: "black" }}
              />
              K
            </h2>
            <p class="count-text ">Project Completed</p>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="counter">
            <img src={teamMembers} className="img-fluid" />
            <h2 class="timer count-title count-number">
              <CountUp
                start={0}
                end={100}
                duration={2}
                style={{ color: "black" }}
              />
              +
            </h2>
            <p class="count-text ">Team Members</p>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="counter">
            <img src={satisfiedClients} className="img-fluid" />
            <h2 class="timer count-title count-number">
              <CountUp
                start={0}
                end={150}
                duration={2}
                style={{ color: "black" }}
              />
              K
            </h2>
            <p class="count-text ">Satisfied Clients</p>
          </div>
        </div>

        <div class="col-md-3 col-6">
          <div class="counter">
            <img src={totalBranches} className="img-fluid" />
            <h2 class="timer count-title count-number">
              <CountUp
                start={0}
                end={5}
                duration={2}
                style={{ color: "black" }}
              />
              K
            </h2>
            <p class="count-text ">Total Branches</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCounter;
