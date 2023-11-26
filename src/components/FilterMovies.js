import {React, useState, useEffect } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";

const FilterMovies= () =>{
    const [searchValue, setSearchValue] = useState("");
    const [movies,setMovies]= useState([]);
    useEffect(()=>{
        axios.get("http://www.omdbapi.com/?s=${searchValue}&apikey=ee495570").then((response)=>{
            if(response.data.Search){
                setMovies(response.data.Search);
            }
        })
        .catch((error)=> console.log(error));
    }, [searchValue]);
    return (
    <div className="add-page">
        <div className="cont">
         <div className="add-content">
            <div className="input-container">
            <form>
    <div className="search-btn">
    <input type="text" placeholder="search for a movie" value={searchValue}
                onChange={(e)=> setSearchValue(e.target.value)} className="inputText"></input>  
      <button type="submit" >Try It</button>
    
.    </div>

  </form>
            </div>
            {
                movies.length > 0 && <ul className="results">
                    {movies.map((movie)=>(
                        <li key={movie.imdbID}>{<ResultCard movie={movie}/>}</li>
                    ))}
                </ul>
            }
         </div>
    </div>
    </div>
    )
}

export default FilterMovies;