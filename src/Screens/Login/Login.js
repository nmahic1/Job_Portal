import React from "react";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import "./_login.scss";

function Login() {
  return (
    <div>
      <Navbar></Navbar>
      <p className="name-login">Login</p>
      <Input />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button title="Login" />
      </div>
    </div>
  );
}

export default Login;
