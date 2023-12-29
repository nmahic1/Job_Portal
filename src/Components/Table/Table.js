import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Table() {
  const [viewJob, setViewJob] = useState({});

  const handleDeleteClick = () => {
    console.log("Opcija Brisanja");
  };

  const handleEditClick = () => {
    console.log("Opcija Uređivanja");
  };

  const handleViewClick = () => {
    console.log("Opcija Pregleda");
  };

  return (
    <table className="table">
      <thead>
        <tr className="header">
          <th>Company Name</th>
          <th>Job Title</th>
          <th>Application Deadline</th>
          <th>Job Type</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {viewJob && (
          <tr key={viewJob._id}>
            <td>{viewJob.companyName}</td>
            <td>{viewJob.jobTitle}</td>
            <td>{viewJob.jobType}</td>
            <td>{viewJob.applicationDeadline}</td>
            <td className="button-icons">
              <i className="fas fa-trash-alt" onClick={handleDeleteClick}></i>
              <i className="fas fa-edit" onClick={handleEditClick}></i>
              <i className="fas fa-eye" onClick={handleViewClick}></i>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
