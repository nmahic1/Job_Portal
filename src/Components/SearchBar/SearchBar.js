import React, { useState } from "react";
import Button from "../Button/Button";

function SearchBar() {
  return (
    <div className="search-wrapper">
      <input type="search" placeholder="Search by Job title..." />
      <Button>Search</Button>
    </div>
  );
}

export default SearchBar;
