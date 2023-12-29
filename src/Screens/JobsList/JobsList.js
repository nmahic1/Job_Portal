import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Table/Table";
import { useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

function JobsList() {
  const [job, setJob] = useState([]);
  const token = localStorage.getItem("token");
  const [appliedJob, setAppliedJob] = useState({});
  const { id: appliedJobId } = useParams();

  const loadJobs = async () => {
    console.log(process.env.REACT_APP_BACKEND_LINK);
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
      setJob(json.data);
    });
  };

  const filterAppliedJob = () => {
    if (appliedJobId) {
      const jobs = job.filter((jobs) => jobs._id === appliedJobId);
      if (jobs.length > 0) {
        setAppliedJob(jobs[0]);
      }
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  useEffect(() => {
    filterAppliedJob();
  }, [job, appliedJobId]);

  return (
    <div>
      <Navbar> </Navbar>
      <div className="jobsList-wrapper">
        <p className="name-jobsList">My Jobs List</p>

        <Table job={appliedJob ? [appliedJob] : []}></Table>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default JobsList;
