import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Box from "../../Components/Box/Box";
import JobComponent from "../../Components/JobComponent/JobComponent";
import Footer from "../../Components/Footer/Footer";
import Login from "../Login/Login";

function Landing() {
  const [availableJobs, setAvailableJobs] = useState([]);

  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    console.log(process.env.REACT_APP_BACKEND_LINK);
    const result = await fetch(
      process.env.REACT_APP_BACKEND_LINK + "/category/load",
      {
        method: "GET",
        "Content-Type": "application/json",
      }
    );
    result.json().then((json) => {
      console.log("Fetching all items");
      console.log(json);
      setCategories(json.data);
      console.log(json.data);
    });
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
    fetchData();
    loadJobs();
  }, []);

  return (
    <div className="landing-wrapper">
      <Navbar />
      <div className="landing-content-1">
        <h1>
          Find a <span className="green-text">Job</span> That{" "}
          <span className="green-text">Matches</span> Your Passion
        </h1>
        <p className="gray-text">
          Hand-picked opportunities to work from home, remotely, freelance,
          full-time, part-time, contract and internships.
        </p>
        <SearchBar />
      </div>
      <div className="landing-content-2">
        <h2>Popular Categories</h2>
        <div className="box">
          <Box category={categories} reload={fetchData}></Box>
        </div>
      </div>
      <div className="landing-content-3">
        <h2>All Popular Listed jobs</h2>

        <JobComponent
          available={availableJobs}
          jobpost={loadJobs}
        ></JobComponent>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Landing;
