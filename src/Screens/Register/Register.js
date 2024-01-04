import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");
  const navigate = useNavigate();

  const registerUser = async () => {
    if (!email || !password || !firstName || !lastName) {
      setRegistrationMessage("Please fill in all fields.");
      return;
    }

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
        navigate("/login");
      } else {
        const data = await response.json();
        setRegistrationMessage(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationMessage("Error during registration. Please try again.");
    }
  };

  const handleRegisterMessage = () => {
    setRegistrationMessage(false);
  };

  return (
    <div className="register-wrapper">
      <p className="name-register">Register</p>
      <div className="content">
        <Input
          label="Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            handleRegisterMessage();
          }}
        />

        <Input
          label="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            handleRegisterMessage();
          }}
        />

        <Input
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleRegisterMessage();
          }}
        />

        <Input
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            handleRegisterMessage();
          }}
        />

        <Button onClick={registerUser}>Create Account</Button>

        {registrationMessage && (
          <p style={{ color: "red" }}>{registrationMessage}</p>
        )}
      </div>
      <p>
        Already have an account? <Link to="/login">Log in!</Link>
      </p>
    </div>
  );
}

export default Register;
