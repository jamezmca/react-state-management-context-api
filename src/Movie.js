import React from 'react'
import './App.css'

const Movie = ({name, price}) => {
    //used destructuring of props as opposed to doing props.name
    return (
        <div className="movieItem">
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie
