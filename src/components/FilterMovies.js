import { useState } from "react";

function FilterMovies(Movies){
    console.log(Movies);
    const [filters, setFilters]= useState ({
        title: '',
        rating: '',
    });

    const filteredMovies= Movies.filter ((movie)=>{
        const {title}= filters;
        return (
        movie.title.toLowerCase().includes(title.toLowerCase()) 
      
        );
    });
    return {
     filters,
    setFilters,
    filteredMovies,
};


};

export default FilterMovies;