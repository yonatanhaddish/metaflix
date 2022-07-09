import React from "react";
import "./movielist.css";
import Heart from "react-heart";

const MovieList = (props) => {
  return (
    <>
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
                <h1>Movie Title</h1>
                <p>Release Date</p>
            </div>
            <div className="card-fav-icon">
                <Heart style={{width: "1.5rem"}}/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
{
  /* <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt="movie"
                className="single-image"
              /> */
}
