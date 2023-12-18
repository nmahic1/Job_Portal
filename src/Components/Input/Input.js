import React from "react";

function Input(props) {
  return (
    <div className="input-wrapper">
      <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
        {props.label}
      </div>
      <input
        className="input-container"
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
