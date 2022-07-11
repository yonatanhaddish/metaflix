import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from "./components/MovieList/MoviesList";
// import Navbar from "./components/Navbar/Navbar";
import FavouritesList from './components/MovieList/FavouritesList';


function App() {

  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  // const [newFavMovies, setNewFavMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17"
  
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    setMovies(responseJson.results)
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favMovies, movie];
    setFavMovies(newFavouriteList);
    console.log(newFavouriteList)
  }

  return (
    // <Router basename="/">
    //   {/* <Navbar /> */}
    //   <Routes>
    //     <Route exact path="/" element={<MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites}/>} />
    //   </Routes>
    // </Router>
    <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie}  favouriteComponent={FavouritesList}/>
  
  );
}

export default App;
