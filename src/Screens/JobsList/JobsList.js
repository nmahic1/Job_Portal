import React, { useState, useEffect } from "react";
import Table from "../../Components/Table/Table";
import SearchBar from "../../Components/SearchBar/SearchBar";
import useDebounce from "../../Hooks/useDebounce";

function JobsList() {
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");
  //const [appliedJob, setAppliedJob] = useState({});
  const [filteredJobs, setFilteredJobs] = useState([]);
  //const { id: appliedJobId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

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
      setJobs(json.data);
    });
  };

  /*const filterAppliedJob = () => {
    if (appliedJobId) {
      const jobs = job.filter((jobs) => jobs._id === appliedJobId);
      if (jobs.length > 0) {
        setAppliedJob(jobs[0]);
      }
    }
  };*/

  useEffect(() => {
    loadJobs();
  }, []);

  /*useEffect(() => {
    filterAppliedJob();
  }, [job, appliedJobId]);*/

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    if (debouncedSearchTerm !== "") {
      const filtered = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setFilteredJobs(filtered);
    } else {
      setFilteredJobs([]);
    }
  }, [debouncedSearchTerm, jobs]);

  return (
    <div>
      <div className="jobsList-wrapper">
        <p className="name-jobsList">My Jobs List</p>
        <SearchBar onSearch={handleSearch} />

        <Table jobs={searchTerm === "" ? jobs : filteredJobs}></Table>
      </div>
    </div>
  );
}

export default JobsList;
