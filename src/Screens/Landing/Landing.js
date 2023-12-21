import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import jobpicture from "../../Assets/jobpicture.png";
import Input from "../../Components/Input/Input";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Box from "../../Components/Box/Box";
import JobComponent from "../../Components/JobComponent/JobComponent";
import Button from "../../Components/Button/Button";
import Footer from "../../Components/Footer/Footer";

function Landing() {
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
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
        </div>
        <div className="box">
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
          <Box>Technology</Box>
        </div>
      </div>
      <div className="landing-content-3">
        <h2>All Popular Listed jobs</h2>

        <JobComponent></JobComponent>
        <JobComponent></JobComponent>
        <JobComponent></JobComponent>
        <JobComponent></JobComponent>
        <JobComponent></JobComponent>
        <JobComponent></JobComponent>

        <div className="button">
          <Button>View More</Button>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Landing;
