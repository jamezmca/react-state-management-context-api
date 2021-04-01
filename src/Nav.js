import React, { useContext } from 'react'
import './App.css'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className="navContainer">
            <h1 className="navHeader">Dev James</h1>
            <p className="navParagraph">List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav
