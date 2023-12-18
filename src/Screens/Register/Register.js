import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log("Prijavljeni ste!");
  };

  return (
    <div>
      <Navbar></Navbar>
      <p className="name-login">Register</p>
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
        <Button onClick={handleLogin}>Create Account</Button>
      </div>
    </div>
  );
}

export default Register;
