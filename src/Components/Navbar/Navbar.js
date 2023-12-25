import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
    console.log("Prijavljeni ste!");
  };

  const handleJob = () => {
    navigate("/createJob");
    console.log("Postavite posao");
  };

  return (
    <nav className="navbar">
      <p className="name">JobsPortal</p>
      <div className="right">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleJob}>Post a Job</Button>
      </div>
    </nav>
  );
}

export default Navbar;
