import React, { useState } from "react";
import "./movielist.css";
import Heart from "react-heart";
// import FavouritesList from "./FavouritesList";

const MovieList = (props) => {
  const [favMovies, setFavMovies] = useState([]);
  const [active, setActive] = useState(false);

  const handleFav = (movie) => {
    const newFavMovies = [...favMovies, movie];
    setFavMovies(newFavMovies);
    console.log(newFavMovies);
    console.log(movie);
    // console.log(movies)
    // console.log(favMovies);
    return newFavMovies;
  };
  // const remoteFav = (movie) => {
  //     const newFavRemoved = []
  // }

  const handleToogle = (movie) => {
    setActive(!active);
    if (!active) {
      handleFav(movie);
      console.log("correct");
    } else {
      console.log("errrrrrrr");
    }
    // console.log('Yonatan')
    // console.log(movie);
  };

  return (
    <div className="container">
      {props.movies.map((movie, index) => (
        <div className="cards">
          <div className="card-img">
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={index}
              className="single-image"
            />
          </div>
          <div className="card-body">
            <p>{movie.title}</p>
            {/* <p>Release Date: {movie.release_date}</p> */}
          </div>
          <div className="card-heart">
            <Heart
              movies={movie}
              setFavMovies={setFavMovies}
              className="heart"
              style={{ width: "1.5rem" }}
              value={setFavMovies}
              isActive={active}
              // onClick= {(e) => handleFav(movie)} setFavMovies={setFavMovies}
              onClick={(evt) => handleToogle(movie)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
