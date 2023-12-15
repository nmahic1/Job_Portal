import React from "react";
import Button from "../Button/Button";
import "./_navbar.scss";
import "../Button/_button.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <p className="name">JobsPortal</p>
        <div className="button-container2">
          <Button title="Login" className="button-container" />
          <Button title="PostJob" className="button-container" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
