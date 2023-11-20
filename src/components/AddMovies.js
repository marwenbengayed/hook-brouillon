import React, { useState } from "react"


let nextMovie=0
function AddMovies(){
    const [posterURL, setPosterURL ]=useState('');
    const [title, setTitle]= useState('');
    const [rating,setRating]=useState ('');
    const [description,setDescription]= useState ('');
    const [movie,setMovie]=useState('');
    return (
        <>
        <input
        placeholder="PosterUrl here"
        value={posterURL}
        onChange={(e)=> setPosterURL(e.target.value)}
/>
<input
placeholder="enter title"
value={title}
onChange={(e)=>setTitle(e.target.value)}/>      
<input
placeholder="rate here"
value={rating}
onChange={(e)=>setRating(e.target.value)}/>
<input
placeholder="description here"
value={description}
onChange={(e)=>setDescription(e.target.value)}/>
   <button onClick={()=>{
        setMovie ([...movie,nextMovie=nextMovie++, posterURL={posterURL}, title={title}, rating={rating}, description={description}
        ]);
    }}>Add movie</button>
<ul>
    <li>{setMovie}</li>
</ul>
    </>

 
    );
};
export default AddMovies;
