import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import useDebounce from "../../Hooks/useDebounce";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  useEffect(() => {
    console.log("debounce", searchTerm);
  }, [debounceSearchTerm]);
  return (
    <div className="search-wrapper">
      <input
        type="search"
        placeholder="Search by Job title..."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleSearchClick}>Search</Button>
    </div>
  );
}

export default SearchBar;
