import React from "react";
import Ikona from "../../Assets/Icon.png";

function Box(props) {
  return (
    <div className="box-wrapper">
      <div className="background-image">
        <div className="circle">
          {/* <img src={Krug} alt="Pozadinska slika" /> */}
          <img className="icon" src={Ikona} alt="Ikona" />
        </div>
        <div className="text">{props.children}</div>
      </div>
    </div>
  );
}

export default Box;
