import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
          placeholder="Tìm kiếm"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
