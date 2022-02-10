

import React, { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
// import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/books/${keyword}`);
    } else {
      navigate("/books");
    }
  };

  return (
    <Fragment>
      <form id="searchbar" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a book..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Q" />
      </form>
    </Fragment>
  );
};

export default Search;
