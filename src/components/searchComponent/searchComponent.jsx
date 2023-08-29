import React, { useState } from "react";
import styles from "./searchCoponent.module.css";

function SearchInput({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm); // Call onSearch whenever the input value changes
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchinput}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchInput;
