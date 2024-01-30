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
    <div className="container p-5">
      <div className="row text-center">
        <div className="col-md-3 col-6">
          <div className="counter">
            <img
              src={projectCompleted}
              classNameName="img-fluid"
              alt="projectCompleted"
            />
            <h2 className="count-title">
              <CountUp
                start={0}
                end={10}
                duration={2}
                style={{ color: "black" }}
              />
              K+
            </h2>
            <p className="count-text ">Project Completed</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="counter">
            <img
              src={teamMembers}
              classNameName="img-fluid"
              alt="teamMembers"
            />
            <h2 className="timer count-title count-number">
              <CountUp
                start={0}
                end={50}
                duration={2}
                style={{ color: "black" }}
              />
              +
            </h2>
            <p className="count-text ">Team Members</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="counter">
            <img
              src={satisfiedClients}
              classNameName="img-fluid"
              alt="satisfiedClients"
            />
            <h2 className="timer count-title count-number">
              <CountUp
                start={0}
                end={9}
                duration={2}
                style={{ color: "black" }}
              />
              K+
            </h2>
            <p className="count-text ">Satisfied Clients</p>
          </div>
        </div>

        <div className="col-md-3 col-6">
          <div className="counter">
            <img
              src={totalBranches}
              classNameName="img-fluid"
              alt="totalBranches"
            />
            <h2 className="timer count-title count-number">
              <CountUp
                start={0}
                end={10}
                duration={2}
                style={{ color: "black" }}
              />
              +
            </h2>
            <p className="count-text ">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCounter;
