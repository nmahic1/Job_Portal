import React from "react";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log("Prijavljeni ste!");
  };

  return (
    <div className="login-wrapper">
      <Navbar></Navbar>
      <p className="name-login">Login</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={handleLogin}>Login</Button>
      </div>
      <p className="name-login2">
        Not a member? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
