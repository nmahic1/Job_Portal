import React from "react";

function Input(props) {
  return (
    <div className="input-wrapper">
      <label>{props?.label}</label>
      <input
        {...props}
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
