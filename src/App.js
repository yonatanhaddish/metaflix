import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList/MoviesList";
// import Navbar from "./components/Navbar/Navbar";
import AddFavourite from "./components/MovieList/AddFavourite";
import FavList from "./components/MovieList/FavList";
import Navbar from "./components/Navbar/Navbar";
import RemoveFav from "./components/MovieList/RemoveFav";

function App() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [active, setActive] = useState(false);

  const getMovieRequest = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.results);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favMovies, movie];
    setFavMovies(newFavouriteList);
    saveToLocalStorege(newFavouriteList);
    console.log(newFavouriteList);
    console.log(movie)
    changeClick(movie)
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favMovies.filter(
      (favMovie) => favMovie.id !== movie.id
    );

    setFavMovies(newFavouriteList);
    saveToLocalStorege(newFavouriteList);
  };

  const saveToLocalStorege = (items) => {
    localStorage.setItem("fav-movies", JSON.stringify(items));
  };

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("fav-movies"));

    if (movieFavourites) {
      setFavMovies(movieFavourites);
    }
  }, []);

  const changeClick = (movie) => {
    console.log(movie);
    setActive(!active)
  };

  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MovieList
              movies={movies}
              handleFavouritesClick={addFavouriteMovie}
              favouriteComponent={AddFavourite}
              handleClick={changeClick}
              active={active}
              setActive={setActive}
            />
          }
        />
        <Route
          exact
          path="/liked"
          element={
            <FavList
              favMovies={favMovies}
              favouriteComponent={RemoveFav}
              handleFavouritesClick={removeFavouriteMovie}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
