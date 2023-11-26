import React from "react";
import MovieCard from "./MovieCard";
import { Movies } from "./Movies";

function MovieList ({movie}) {
    return (
    <div className="movie-list">
       {Movies.map((movie, index)=>(
        <MovieCard key={index} movie={movie}/>
       ))}
    </div>
    );
}

export default MovieList