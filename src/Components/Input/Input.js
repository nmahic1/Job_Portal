import React from "react";
import "./_input.scss";

function Input() {
  return (
    <div>
      <form className="login-form">
        <label>Username</label>
        <input type="text"></input>
        <label>Password</label>
        <input type="text"></input>
      </form>
    </div>
  );
}

export default Input;
