import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToList, handleMovieSearch } from "../actions";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const { showSearchResults, results: movie } = useSelector(
    (state) => state.search
  );

  const handleAddToMovies = (movie) => {
    dispatch(addMovieToList(movie));
  };

  const handleSearchClick = () => {
    dispatch(handleMovieSearch(searchText));
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input onChange={handleSearchChange} />
      <button onClick={handleSearchClick}>Search</button>

      {showSearchResults && (
        <div>
          <img src={movie.Poster} alt="search-pic" />
          <span>{movie.Title}</span>
          <button onClick={() => handleAddToMovies(movie)}>
            {" "}
            Add to Movies{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
