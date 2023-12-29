import React from "react";
import Ikona from "../../Assets/Icon.png";

function Box({ category }) {
  return (
    <div className="box-wrapper">
      {category.map((category) => (
        <div key={category._id} className="background-image">
          <div className="circle">
            <img className="icon" src={Ikona} alt="Ikona" />
          </div>
          <div className="text"> {category.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Box;
