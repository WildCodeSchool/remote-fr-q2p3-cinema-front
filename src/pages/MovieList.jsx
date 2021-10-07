import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/movies/subventions')
            .then((res) => res.data)
            .then((data) => setMovies(data))
    }, [movies, movie])
    const uniqueGenre = [];
    movies.map(item => {
        const findItem = uniqueGenre.find(x => x.FILM_GENRE === item.FILM_GENRE);
        if (!findItem)
            uniqueGenre.push(item);
    });
    const uniqueDate = [];
    movies.map(item => {
        const findItem = uniqueDate.find(x => x.FILM_ANNEE === item.FILM_ANNEE);
        if (!findItem)
            uniqueDate.push(item);
    });
    const handleChangeGenre = event => {
        setMovie(event.target.value);
    };

    const filterDropdown = movies.filter(function (result) {
        return result.FILM_GENRE === movie;
    });
    const filterDropdowndate = movies.filter(function (result) {
        return result.FILM_ANNEE === movie;
    });
    return (
        <div className="Movies" >

            <label>
                Genre
                <select value={movie} onChange={handleChangeGenre}>
                    {uniqueGenre.map(movie => (
                        <option>
                            {movie.FILM_GENRE}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Année
                <select value={movie} onChange={handleChangeGenre}>
                    {uniqueDate.map(movie => (
                        <option>
                            {movie.FILM_ANNEE}
                        </option>
                    ))}
                </select>
            </label>
            <div>
                {filterDropdown.map(movie => (
                    <div key={movie} style={{ margin: "10px" }}>
                        <MovieCard movie={movie} />
                        <br />
                    </div>
                ))}
            </div>
            <div>
                {filterDropdowndate.map(movie => (
                    <div key={movie} style={{ margin: "10px" }}>
                        <MovieCard movie={movie} />
                        <br />
                    </div>
                ))}
            </div>

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
