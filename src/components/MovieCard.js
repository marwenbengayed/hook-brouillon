import React from "react";
import { Movies } from "./Movies";




function MovieCard () {
  //  const {posterURL, title, rating, description}= movie;
return (
  Movies.map((movie)=>(
  
    <div className="movie" >
      <img src={movie.posterURL}   className="poster"></img>
    <div className="movie-details">
      <div className="box">
        <h4 className="title">{movie.title}</h4>
      <p className="rating">{movie.rating}/10 lmdb</p>
      </div>
      <div className="overview">
        <h1>overview</h1>
       {movie.description}
      </div>
   
     </div>
    </div>
)
  )
)
};
export default MovieCard;





