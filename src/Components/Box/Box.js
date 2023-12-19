import React from "react";
import Krug from "../../Assets/krug.png";
import Ikona from "../../Assets/Icon.png";

function Box(props) {
  return (
    <div className="box-wrapper">
      <div className="background-image">
        <img src={Krug} alt="Pozadinska slika" />
        <img className="icon" src={Ikona} alt="Ikona" />
        <div className="text">{props.children}</div>
      </div>
    </div>
  );
}

export default Box;
