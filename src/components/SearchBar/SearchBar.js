import React, { useState } from "react";
import "./searchbar.css";

function SearchBar({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="custom-search-bar">
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
