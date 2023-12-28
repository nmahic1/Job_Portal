import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_LINK + "/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const token = data.data.token;
        localStorage.setItem("token", token);
        navigate("/");
        console.log("Login successful!");
      } else {
        console.error("Login failed");
        setLoginFailed(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="login-wrapper">
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

          <Button onClick={loginUser}>Login</Button>

          {loginFailed && (
            <p style={{ color: "red" }}>Invalid email or password.</p>
          )}

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
