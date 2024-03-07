import React from "react";
import AddFavourites from "./AddFavourites";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent || AddFavourites;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          key={index}
        >
          <img src={movie.Poster} alt="movie" />
          <div
            onClick={() => props.handleFavourites(movie)}
            className="overlay d-flex align-items-center justify-content"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
