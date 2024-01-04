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
            <div className="text">
              <p className="first">{availableJobs.companyName}</p>
              <h3>{availableJobs.jobTitle}</h3>
              <div className="details">
                <p>
                  <img src={Map} alt="Mapa" /> {availableJobs.jobLocation}
                </p>
                <p>
                  <img src={FullTime} alt="Full Time" />{" "}
                  {availableJobs.jobCategory.title}
                </p>
                <p>
                  {availableJobs.salaryMin} - {availableJobs.salaryMax}
                </p>
              </div>
            </div>
            <div className="button-job">
              <Link to={`/aboutJob/${availableJobs._id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobComponent;
