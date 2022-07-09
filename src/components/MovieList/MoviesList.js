import React from "react";
import "./movielist.css";

const MovieList = (props) => {
  return (
    <>
      <div>
        <div className="movies-list-container">
          {props.movies.map((movie, index) => (
            <div className="movie-single">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie"
                className="single-image"
              />
            </div>
          ))}
        </div>
        <div>
        {/* <p>{movie.title}</p> */}
        </div>
      </div>
    </>
  );
};

export default MovieList;
