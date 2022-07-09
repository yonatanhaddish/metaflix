import React from "react";
import "./movielist.css";
import Heart from "react-heart";

const MovieList = (props) => {
  return (
      <div className="container">
        {props.movies.map((movie, index) => (
          <div className="cards">
            <div className="card-img">
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie"
                className="single-image"
              />
            </div>
            <div className="card-body">
                <h2>{movie.title}</h2>
                {/* <p>Release Date: {movie.release_date}</p> */}
            </div>
            <div className="card-heart">
                <Heart className="heart" style={{width: "1.5rem"}}/>
            </div>
          </div>
        ))}
      </div>
  );
};

export default MovieList;
