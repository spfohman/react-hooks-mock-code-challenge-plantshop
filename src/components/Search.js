import React from "react";

function Search({searchPlant, onSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input 
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchPlant}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
