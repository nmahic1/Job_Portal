import React from "react";
import Button from "../Button/Button";

function Navbar() {
  const handleLogin = () => {
    console.log("Prijavljeni ste!");
  };

  const handleJob = () => {
    console.log("Postavite posao");
  };

  return (
    <nav className="navbar">
      <p className="name">JobsPortal</p>
      <div className="button-container2">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleJob}>Post a Job</Button>
      </div>
    </nav>
  );
}

export default Navbar;
