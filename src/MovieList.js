import React, { useState, useContext } from 'react'
import Movie from './Movie'
import './App.css'
import { MovieContext } from './MovieContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div className="movieList">
            {movies.map(movie => (
                <Movie name={movie.name} price={movie.price}
                key={movie.id}/>
            ))}
        </div>
    )
}

export default MovieList
