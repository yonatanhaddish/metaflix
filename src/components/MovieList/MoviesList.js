import React, { useEffect, useState } from "react";
import "./movielist.css";
import Heart from "react-heart";

const MovieList = (props) => {

  const FavouriteComponent = props.favouriteComponent;

  // const [active, setActive] = useState(false)
  // const handleClick = (movie) => {
  //   console.log("handleClick")
  // };

  

  return (
    <div className="container">
      {props.movies.map((movie, index) => (
        <div className="cards">
          <div className="card-img">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt="movie"
              key={index.toString()}
              className="single-image"
            />
          </div>
          <div className="card-body">
            <p>{movie.title}</p>
          </div>
          <div className="card-heart"
              onClick={() => props.handleFavouritesClick(movie)}>
          
            <FavouriteComponent />
            
          </div>
          
          
        </div>
        
      ))}
    </div>
  );
};

export default MovieList;

// (e) => props.handleFavouritesClick(movie)