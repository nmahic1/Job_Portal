import React from "react";
import Button from "../Button/Button";
import Map from "../../Assets/Map.png";
import FullTime from "../../Assets/minimize.png";
import { Link } from "react-router-dom";

function JobComponent({ available }) {
  return (
    <div className="jobcomponent-wrapper">
      {available &&
        available.map((availableJobs) => (
          <div className="job-wrapper">
            <div className="circle"></div>
            <div class="text">
              <p className="first">{availableJobs.companyName}</p>
              <h3>{availableJobs.jobTitle}</h3>
              <div className="details">
                <p>
                  <img src={Map} alt="mapa" /> {availableJobs.jobLocation}
                </p>
                <p>
                  <img src={FullTime} alt="full time" />{" "}
                  {availableJobs.jobCategory.title}
                </p>
                <p>
                  {availableJobs.salaryMin} - {availableJobs.salaryMax}
                </p>
              </div>
            </div>
            <div className="button-job">
              <Link to="/aboutJob">
                {" "}
                <Button>View details</Button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobComponent;
