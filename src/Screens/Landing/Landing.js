import React, { useState, useEffect } from "react";
import Box from "../../Components/Box/Box";
import JobComponent from "../../Components/JobComponent/JobComponent";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { loadCategories } from "../../api/categories.api";

function Landing() {
  const [availableJobs, setAvailableJobs] = useState([]);
  const [categories, setCategories] = useState([]);

  const { isLoggedIn } = useAuth();

  const getCategories = async () => {
    let result = await loadCategories();
    setCategories(result.data);
  };

  const token = localStorage.getItem("token");

  const loadJobs = async () => {
    console.log(process.env.REACT_APP_BACKEND_LINK);
    console.log("token", token);
    const result = await fetch(
      process.env.REACT_APP_BACKEND_LINK + "/jobpost/load",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    result.json().then((json) => {
      console.log("Fetching all items");
      console.log(json);
      setAvailableJobs(json.data);
      console.log(json.data);
    });
  };

  useEffect(() => {
    getCategories();
    loadJobs();
  }, []);

  return (
    <div className="landing-wrapper">
      <div className="landing-content-1">
        <h1>
          Find a <span className="green-text">Job</span> That{" "}
          <span className="green-text">Matches</span> Your Passion
        </h1>
        <p className="gray-text">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </p>
      </div>
      <div className="landing-content-2">
        <h2>Popular Categories</h2>
        <div className="box">
          <Box category={categories}></Box>
        </div>
      </div>
      <div className="landing-content-3">
        {isLoggedIn ? (
          <>
            <h2>All Popular Listed jobs</h2>
            <JobComponent available={availableJobs}></JobComponent>
            <Link to="/jobsList">
              <div className="viewmore-button">
                <Button>View More</Button>
              </div>
            </Link>
          </>
        ) : (
          <Link to="/login">
            {" "}
            <h2>Login to see job listings.</h2>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Landing;
