import React from "react";
import Ikona from "../../Assets/Icon.png";

function Box({ category, reload }) {
  return (
    <div className="box-wrapper">
      {category.map((categories) => (
        <div className="background-image">
          <div className="circle">
            <img className="icon" src={Ikona} alt="Ikona" />
          </div>
          <div className="text"> {categories.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Box;
