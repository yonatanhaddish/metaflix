import React, { useEffect, useState } from "react";
import "./movielist.css";

const FavList = (prop) => {
  return (

    <div className="container">
      {prop.favMovies.map((favMovie, index) => (
        <div className="cards">
           <div className="card-img">
            <img
              src={`https://image.tmdb.org/t/p/w300/${favMovie.poster_path}`}
              alt="favMovie"
              key={index.toString()}
              className="single-image"
            />
          </div> 
           <div className="card-body">
            <p>{favMovie.title}</p>
          </div>
        </div>
        
      ))}
    </div>
  );
};

export default FavList;
