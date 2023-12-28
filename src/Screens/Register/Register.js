import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const registerUser = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_LINK + "/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ firstName, lastName, email, password }),
        }
      );

      if (response.ok) {
        console.log("Registration successful!");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleRegister = () => {
    console.log("registracija");
    registerUser();
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="register-wrapper">
        <p className="name-register">Register</p>
        <div className="content">
          <Input
            label="Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <Input
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

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
          <Link to="/login">
            <Button onClick={handleRegister}>Create Account</Button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Register;
