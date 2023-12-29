import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Table({ jobs }) {
  const [deleteJob, setDeleteJob] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleViewClick = (jobId) => {
    navigate(`/aboutJob/${jobId}`);
    console.log("Opcija Pregleda");
  };

  /*const handleDeleteClick = async (id) => {
    await fetch(process.env.REACT_APP_BACKEND_LINK + "/jobpost/remove/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDeleteJob(false);
    console.log(id);
  };*/

  return (
    <table className="table">
      <thead>
        <tr className="header">
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Application Deadline</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {jobs &&
          jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.companyName}</td>
              <td>{job.jobTitle}</td>
              <td>{job.applicationDeadline}</td>
              <td className="button-icons">
                {/* <i
                  className="fas fa-trash-alt"
                  onClick={() => handleDeleteClick(job._id)}
                ></i> */}
                <i
                  className="fas fa-eye"
                  onClick={() => handleViewClick(job._id)}
                ></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
