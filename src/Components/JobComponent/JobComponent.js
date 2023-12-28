import React from "react";
import Button from "../Button/Button";
import Map from "../../Assets/Map.png";
import FullTime from "../../Assets/minimize.png";
import { Link } from "react-router-dom";

function JobComponent({ available }) {
  return (
    <div className="jobcomponent-wrapper">
      {available &&
        available.map((job) => (
          <div key={job._id} className="job-wrapper">
            <div className="circle"></div>
            <div className="text">
              <p className="first">{job.companyName}</p>
              <h3>{job.jobTitle}</h3>
              <div className="details">
                <p>
                  <img src={Map} alt="Mapa" /> {job.jobLocation}
                </p>
                <p>
                  <img src={FullTime} alt="Full Time" /> {job.jobCategory.title}
                </p>
                <p>
                  {job.salaryMin} - {job.salaryMax}
                </p>
              </div>
            </div>
            <div className="button-job">
              <Link to={`/aboutJob/${job._id}`}>
                <Button>View Details</Button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

export default JobComponent;
