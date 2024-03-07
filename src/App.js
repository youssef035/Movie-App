import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourites from "./Components/AddFavourites";

const App = () => {
  // use state to hold the movies data initialized to an empty array in the beginning
  // testing some hard coded data
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState("batman");
  const [favourites, setFavourites] = useState([]);

  const getMoviesRequest = async (searchMovies) => {
    const url = `http://www.omdbapi.com/?s=${searchMovies}&apikey=44f3f654 `;

    const response = await fetch(url);

    // convert to json
    const responseJson = await response.json();
    console.log(responseJson);

    // if we have any search result we stick it to the state
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  //call fetch function
  useEffect(() => {
    getMoviesRequest(searchMovies);
  }, [searchMovies]);

  const addFavMovie = (movie) => {
    const favList = [...favourites, movie];
    setFavourites(favList);
    console.log(favList);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="movies" />
        <SearchBox
          searchMovies={searchMovies}
          setSearchMovies={setSearchMovies}
        />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavourites={addFavMovie}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <div className="row">
        <MovieList movies={favourites} />
      </div>
    </div>
  );
};

export default App;
