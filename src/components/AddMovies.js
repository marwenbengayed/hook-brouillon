import React, { useState } from "react";
import shortid from "shortid";


const AddMovies = (props) => {
    const [text, setText]= useState("");
    const handleSubmit= (e) =>{
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text:text,
            complete:false,
        })
    };
    const handleChangeTitle = (e) =>{
        setText(e.target.value)}
        const handleChangePosterURL= (e) =>{
            setText(e.target.value)
}
const handleChangeDescription= (e) =>{
    setText(e.target.value)
}
const handleChangeRate= (e) =>{
    setText(e.target.value)
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className='input-field' type='text' onChange={handleChangeTitle} value={text} placeholder="title here"/>
            <input className='input-field' type='text' onChange={handleChangePosterURL} value={text} placeholder="posterURL here"/>
            <input className='input-field' type='text' onChange={handleChangeDescription} value={text} placeholder="description here"/>
            <input className='input-field' type='text' onChange={handleChangeRate} value={text} placeholder="rate here"/>
            <button className='btn' onClick={handleSubmit}>Add Movie</button>
        </form>

    </div>
  )
}

export default AddMovies