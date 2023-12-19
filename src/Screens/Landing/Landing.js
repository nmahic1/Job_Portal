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
    <div>
      <Navbar />
      <div className="landing-wrapper">
        <h1>
          Find a <span className="green-text">Job</span>{" "}
        </h1>
        <h1>
          That <span className="green-text">Matches</span> Your
        </h1>
        <h1>Passion</h1>
        <p className="gray-text">
          Hand-picked opportunities to work from home, remotely, freelance,
        </p>
        <p className="gray-text">
          {" "}
          full-time, part-time, contract and internships.
        </p>
        <SearchBar />
      </div>
      <div className="landing-wrapper2">
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
      <div className="landing-wrapper3">
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
