import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="name">JobsPortal</p>
      </Link>

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
