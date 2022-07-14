import React, { useEffect, useState } from "react";
import Heart from "react-heart";
import './movielist.css'

const AddFavourite = (props) => {

  const [activeHeart, setActiveHeart] = useState(false);

  const movie= props.movie
  const index= props.index


  const handleClick = ({movie, index}) => {

    setActiveHeart(!activeHeart)
    console.log(movie + "clicked!")
    console.log(index)
    console.log(activeHeart);
    // saveToLocalStorege(favMovies);
  }

const styleHeart = {
  width: "1.5rem",
  // fill: "red",
};

  return(
    <>
    <Heart
              className= 'heart'
              isActive={activeHeart}
              style={styleHeart}
              // onClick={() => props.handleFavouritesClick(movie)}
              onClick= {() => handleClick({movie, index})}
            />
    </>
  )
}

export default AddFavourite;