import React from "react";

function Button(props) {
  return (
    <div>
      <button
        type="button"
        className="button-container"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
