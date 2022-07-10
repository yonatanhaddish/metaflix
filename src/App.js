import React, { useEffect, useState } from "react";
import FavouritesList from './components/MovieList/FavouritesList'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import MovieList from "./components/MovieList/MoviesList";

import Navbar from "./components/Navbar/Navbar";
// import { GlobalStyle } from "./globalStyles";


function App() {

  const [movies, setMovies] = useState([]);
  // const [favMovies, setFavMovies] = useState([]);
  const [newFavMovies, setNewFavMovies] = useState([]);



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

  // useEffect((movie) => {
  //   console.log("favMovies: " + movie)
  // },[])

  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MovieList movies={movies} />} />
        {/* <Route exact path="/liked" element={ <FavouritesList  newFavMovies={newFavMovies}/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
