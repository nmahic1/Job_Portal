import React from "react";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <p className="name">JobsPortal</p>
      </Link>

      <div className="right">
        {isLoggedIn ? (
          <>
            <Link to="/createJob">
              <Button>Post a Job</Button>
            </Link>
            <Button onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
