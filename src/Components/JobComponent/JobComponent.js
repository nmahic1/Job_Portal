import React from "react";
import Button from "../Button/Button";
import Map from "../../Assets/Map.png";
import FullTime from "../../Assets/minimize.png";
import Circle from "../../Assets/Ellipse 2.png";

function JobComponent() {
  return (
    <div className="job-wrapper">
      <img className="main" src={Circle} alt="krug" />
      <div class="text">
        <p className="first">Match Company Limited</p>
        <h3>Fresher UI/UX Desginer (3 Years Exp.)</h3>
        <div className="details">
          <p>
            <img src={Map} alt="mapa" /> Nairobi, Kenya
          </p>
          <p>
            <img src={FullTime} alt="full time" /> Full Time
          </p>
          <p>Ksh 150,000</p>
        </div>
      </div>
      <div className="button-job">
        <Button>View details</Button>
      </div>
    </div>
  );
}

export default JobComponent;
