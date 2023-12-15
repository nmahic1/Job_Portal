import React from "react";
import "./_button.scss";

function Button(props) {
  return <button className="button-container">{props.title}</button>;
}

export default Button;
