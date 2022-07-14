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

const styleHeart01 = {
  width: "2.5rem",
  // fill: "red",
};

const styleHeart02 = {
  width: "1.5rem",
  // fill: "red",
};

useEffect(() => {
  console.log(`my-fav-list-heart : ${index}`, activeHeart)
  window.localStorage.setItem(`my-fav-list-heart : ${index}`, JSON.stringify(activeHeart))
}, [activeHeart]);

useEffect(() => {
  const data = window.localStorage.getItem(`my-fav-list-heart : ${index}`);
  if (data !== null) setActiveHeart(JSON.parse(data))
  console.log(data)
}, []);

const data01 = window.localStorage.getItem(`my-fav-list-heart : ${index}`);
console.log(`my-fav-list-heart : ${index} ${data01}`)

  return(
    <>
    <Heart
              // className= {}
              isActive={activeHeart}
              style={styleHeart01}
              // onClick={() => props.handleFavouritesClick(movie)}
              onClick= {() => handleClick({movie, index})}
            />
    </>
  )
}

export default AddFavourite;