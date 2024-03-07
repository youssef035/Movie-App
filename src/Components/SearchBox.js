import React from "react";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-3">
      <input
        className="form-control"
        placeholder="type to search"
        value={props.value}
        onChange={(e) => props.setSearchMovies(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBox;
