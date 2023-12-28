import React from "react";

function Button(props) {
  return (
    <div>
      <button
        type="button"
        className="button-container"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
