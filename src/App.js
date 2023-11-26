import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FilterMovies from "./components/FilterMovies";
import AddMovies from "./components/AddMovies";
import { Movies } from "./components/Movies";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import { Component } from 'react';
import Film from "./components/Film";





function App() {
  let [films, setFilms] = useState([]);
  const addFilm = (film)=>{
    setFilms([film, ...films])
  }
return (
  <>
<div className="header">
  <nav>
    <ul>
      <li><a href="#">Action</a></li>
      <li><a href="#">Thriller</a></li>
      <li><a href="#">Drama</a></li>
      <li><a href="#">Comedie</a></li>
      <li><a href="#">Animation</a></li>
    </ul>
  </nav>
  <select className="select-btn" ><option>Top Rated</option>
  <option>Medium</option>
  <option>Worst</option>
  </select>
 
</div>
<div className="container" >
<FilterMovies/>
<div className="add-movie">
<AddMovies onSubmit={addFilm}/>
{
films.map((film)=>(
  <Film key={film.id}film={film}/>
))
}
 </div>
 
<div className="row">
   <MovieList movie={Movies}/>
   </div>
  

</div>



  
  </>
);

};





;
export default App;
