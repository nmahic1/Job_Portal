import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log("Prijavljeni ste!");
  };

  return (
    <div>
      <div className="register-wrapper">
        <Navbar></Navbar>
        <p className="name-register">Register</p>
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

          <Button onClick={handleLogin}>Create Account</Button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
