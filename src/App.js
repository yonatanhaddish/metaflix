import React, { useEffect, useState } from "react";
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import MovieList from "./components/MoviesList";

import Navbar from "./components/Navbar/Navbar";
// import { GlobalStyle } from "./globalStyles";


function App() {

  const [movies, setMovies] = useState([]);

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

  return (
    <>
    <GlobalStyle />
    <Navbar />
    {/* <MovieList movies={movies} /> */}
    </>
  );
}

export default App;
