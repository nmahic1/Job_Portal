import React from "react";

function Input(props) {
  const getInputType = () => {
    switch (props.type) {
      case "dropdown":
        return (
          <select {...props} value={props.value} onChange={props.onChange}>
            {props.options &&
              props.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        );
      case "textarea":
        return (
          <textarea
            {...props}
            value={props.value}
            onChange={props.onChange}
          ></textarea>
        );
      default:
        return (
          <input
            {...props}
            type={props.type || "text"}
            value={props.value}
            onChange={props.onChange}
          />
        );
    }
  };

  return (
    <div className="input-wrapper">
      <label>{props?.label}</label>
      {getInputType()}
    </div>
  );
}

export default Input;
