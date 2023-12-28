import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Button";

function AboutJob() {
  return (
    <div>
      <Navbar />

      <div className="aboutjob-wrapper">
        <p className="name-aboutjob">ime</p>
        <div className="button-config">
          <Button>View Company</Button>
          <Button>Apply This Job</Button>
        </div>
      </div>

      <div className="alignment">
        <h4>
          Minimum Qualification: <br></br> Experience Level:<br></br> Experience
          Length:<br></br>
          Location: <br></br> Application Deadline: <br></br> Salary Range:
        </h4>
        <h3>Job Description:</h3>
        <h4>
          Requirements:<br></br> Responsibilitis:
        </h4>
      </div>

      <Footer />
    </div>
  );
}

export default AboutJob;
