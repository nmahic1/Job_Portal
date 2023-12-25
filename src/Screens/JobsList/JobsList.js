import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Table/Table";

const types = {
  fullTime: "Full Time",
  partTime: "Part Time",
  contract: "Per contract",
};
function JobsList() {
  const [jobs, setJobs] = useState([
    { title: "Title 1", postDate: new Date(), type: types.fullTime },
    { title: "Title 1", postDate: new Date(), type: types.fullTime },
    { title: "Title 1", postDate: new Date(), type: types.fullTime },
    { title: "Title 1", postDate: new Date(), type: types.fullTime },
  ]);

  return (
    <div>
      <Navbar></Navbar>
      <div className="jobsList-wrapper">
        <p className="name-jobsList">My Jobs List</p>
        <Table data={jobs}></Table>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default JobsList;
