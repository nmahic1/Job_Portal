import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="name">JobsPortal</p>
      <div className="right">
        <Link to="/login">
          {" "}
          <Button>Login</Button>
        </Link>

        <Link to="/createJob">
          {" "}
          <Button>Post a Job</Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
