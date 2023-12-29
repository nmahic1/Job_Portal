import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Table from "../../Components/Table/Table";

function JobsList() {
  return (
    <div>
      <Navbar> </Navbar>
      <div className="jobsList-wrapper">
        <p className="name-jobsList">My Jobs List</p>
        <Table></Table>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default JobsList;
