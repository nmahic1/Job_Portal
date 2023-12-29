import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Table({ job }) {
  const [deleteJob, setDeleteJob] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleViewClick = (jobId) => {
    navigate(`/aboutJob/${jobId}`);
    console.log("Opcija Pregleda");
  };

  const handleDeleteClick = async (id) => {
    await fetch(process.env.REACT_APP_BACKEND_LINK + "/remove/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setDeleteJob(false);
    console.log(id);
  };

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
        {job &&
          job.map((jobs) => (
            <tr key={jobs._id}>
              <td>{jobs.companyName}</td>
              <td>{jobs.jobTitle}</td>
              <td>{jobs.applicationDeadline}</td>
              <td className="button-icons">
                <i
                  className="fas fa-trash-alt"
                  onClick={() => handleDeleteClick(jobs._id)}
                ></i>
                <i
                  className="fas fa-eye"
                  onClick={() => handleViewClick(jobs._id)}
                ></i>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
