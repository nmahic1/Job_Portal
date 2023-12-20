import React from "react";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log("Prijavljeni ste!");
  };

  return (
    <div>
      <div className="login-wrapper">
        <Navbar></Navbar>
        <p className="name-login">Login</p>
        <div className="content">
          <Input
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin}>Login</Button>

          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Login;
