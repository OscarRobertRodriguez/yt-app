import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };



  return (
    <div className="ui segment  searchBar">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            placeholder="Search"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
