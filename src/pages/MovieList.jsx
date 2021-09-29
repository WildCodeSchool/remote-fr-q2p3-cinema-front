import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);
    // const [moviesPlay, setMoviesPlay] = useState();
    // const movieID = props.match.params.id;

    useEffect(() => {
        axios
        .get('http://localhost:8000/api/movies/subventions')
        .then((res) => res.data)
        .then((data) => setMovies(data))
    }, [])
    return (
        <div className="Movies">
            {/* <div className="movies-container"> */}
                {movies
                .map((movie, index) => 
                <div key={index}>
                   <MovieCard movie={movie}/> 
                </div>
                )}
            {/* </div> */}
            {/* <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher"/>
            </div>
        <div className="serach_results">
            <div className="search_result"></div>
        </div> */}
        </div>
    )
}

export default MovieList;
