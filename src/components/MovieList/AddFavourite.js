import React, { useState } from "react";
import Heart from "react-heart";
import './movielist.css'

const AddFavourite = (props) => {
  

  

  return(
    <>
    <Heart
              className="heart"
              style={{ width: "1.5rem" }}
              
              // isActive={active}
              // onClick={() => props.handleFavouritesClick(movie)}
              // onClick= {() => handleC()}
            />
    </>
  )
}

export default AddFavourite;