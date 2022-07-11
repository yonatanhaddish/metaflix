import React from "react";
import Heart from "react-heart";

const AddFavourite = (props) => {
  // const handleC = (name) => {
  //   console.log(name);
  // }

  return(
    <>
    <Heart
              className="heart"
              style={{ width: "1.5rem" }}
              // isActive={active}
              // onClick={() => props.handleFavouritesClick(movie)}
              // onClick= {(name) => handleC()}
            />
    </>
  )
}

export default AddFavourite;