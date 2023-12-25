import React from "react";
import Button from "../Button/Button";
import Map from "../../Assets/Map.png";
import FullTime from "../../Assets/minimize.png";

function JobComponent({ available }) {
  return (
    <div>
      {available.map((job) => (
        <div className="job-wrapper">
          <div className="circle"></div>
          <div class="text">
            <p className="first">{job.matching}</p>
            <h3>{job.name}</h3>
            <div className="details">
              <p>
                <img src={Map} alt="mapa" /> {job.country}
              </p>
              <p>
                <img src={FullTime} alt="full time" /> {job.time}
              </p>
              <p>{job.salary}</p>
            </div>
          </div>
          <div className="button-job">
            <Button>View details</Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobComponent;
