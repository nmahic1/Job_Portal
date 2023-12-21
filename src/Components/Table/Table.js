/*import React from "react";

function Table({ data }) {
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

        {data &&
          data.length !== 0 &&
          data.map((entry, i) => {
            let date = entry.postDate.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            });
            return (
              <tr key={entry.title + "_" + i}>
                <td>{entry.title}</td>
                <td>{date}</td>
                <td>{entry.type}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;*/

import React from "react";

function Table({ data }) {
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
        {data &&
          data.length !== 0 &&
          data.map((entry, i) => {
            let datePosted = entry.postDate.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            let deadline = new Date();
            deadline.setDate(deadline.getDate() + 15);

            let deadlineFormatted = deadline.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <tr key={entry.title + "_" + i}>
                <td>{entry.title}</td>
                <td>{entry.type}</td>
                <td>{datePosted}</td>
                <td>{deadlineFormatted}</td>
                <td className="button-icons">
                  <i
                    className="fas fa-trash-alt"
                    onClick={handleDeleteClick}
                  ></i>
                  <i className="fas fa-edit" onClick={handleEditClick}></i>
                  <i className="fas fa-eye" onClick={handleViewClick}></i>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;
