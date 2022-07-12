import React, { useState } from "react";
import Heart from "react-heart";
import './movielist.css'

const AddFavourite = (props) => {

  
  
const styleHeart = {
  width: "1.5rem",
  // fill: "red"
};
  
  

  return(
    <>
    <Heart
              className="heart"
              style={styleHeart}
              // onClick={() => props.handleFavouritesClick(movie)}
              // onClick= {() => props.handleClick()}
            />
    </>
  )
}

export default AddFavourite;