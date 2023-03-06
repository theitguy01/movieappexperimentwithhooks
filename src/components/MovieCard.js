import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites, removeFromFavourites } from "../actions";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.movies.favourites);

  const isFavourite = favourites.includes(movie);

  const handleFavouriteClick = () => {
    dispatch(addToFavourites(movie));
  };

  const handleUnFavouriteClick = () => {
    dispatch(removeFromFavourites(movie));
  };

  return (
    <div>
      <img src={movie.Poster} alt="movie-pic" />
      <div>
        {movie.Title} ({movie.Year})
      </div>
      <div>{movie.Plot}</div>
      <div>{movie.imdbRating}</div>
      {isFavourite ? (
        <button onClick={handleUnFavouriteClick}> Unfavourite </button>
      ) : (
        <button onClick={handleFavouriteClick}> Favourite </button>
      )}
    </div>
  );
};

export default MovieCard;
