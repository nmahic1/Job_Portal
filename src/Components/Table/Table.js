import React from "react";

function Table() {
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
          <th>Title</th>
          <th>Job Type</th>
          <th>Posted Data</th>
          <th>Application Deadline</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Posao 1</td>
          <td>Full-time</td>
          <td>2023-12-20</td>
          <td>2024-01-15</td>
          <td className="button-icons">
            <i className="fas fa-trash-alt" onClick={handleDeleteClick}></i>
            <i className="fas fa-edit" onClick={handleEditClick}></i>
            <i className="fas fa-eye" onClick={handleViewClick}></i>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
