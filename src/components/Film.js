import React from 'react';



const Film = (props) => {
  return (
    <div className='d-f'>
      <div>{props.film.text}</div>
      <button className='delete-btn'>x</button>
    </div>
  )
}

export default Film