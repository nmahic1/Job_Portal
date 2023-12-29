import React, { useState } from "react";
import Button from "../Button/Button";

function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div className="search-wrapper">
      <input
        type="search"
        placeholder="Search by Job title..."
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  );
}

export default SearchBar;
