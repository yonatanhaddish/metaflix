import React from "react";
import Heart from "react-heart";

const FavouritesList = () => {
  return(
    <>
    <Heart
              className="heart"
              style={{ width: "1.5rem" }}
              // onClick={() => props.handleFavouritesClick(movie)}
            />
    </>
  )
}

export default FavouritesList;