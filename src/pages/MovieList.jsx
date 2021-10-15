import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState("All");
    const [date, setDate] = useState("All");

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/movies/subventions')
            .then((res) => res.data)
            .then((data) => setMovies(data))
    }, [movies])

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

    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    };
    const handleChangeDate = (event) => {
        setDate(event.target.value)
    };

    function filterclick() {
        setIsFiltered(true)
        if (genre !== "All" && date === "All") {
            setMovie(movies.filter(item => item.FILM_GENRE === genre && item.FILM_ANNEE !== date))
        }
        else if (genre === "All" && date === "All") {
            setMovie(movies.filter(item => item.FILM_GENRE !== genre && item.FILM_ANNEE !== date))
        }
        else if (genre === "All" && date !== "All") {
            setMovie(movies.filter(item => item.FILM_GENRE !== genre && item.FILM_ANNEE === date))
        }
        else {
            setMovie(movies.filter(item => item.FILM_GENRE === genre && item.FILM_ANNEE === date))
        }
    }


    const [isFiltered, setIsFiltered] = useState(false);
    if (isFiltered) {
        return <div className="Movies">
            <label>
                Genre
                <select value={genre} onChange={handleChangeGenre}>
                    <option>
                        All
                    </option>
                    {uniqueGenre.map(movie => (
                        <option>
                            {movie.FILM_GENRE}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Année
                <select value={date} onChange={handleChangeDate}>
                    <option>
                        All
                    </option>
                    {uniqueDate.map(movie => (

                        <option>
                            {movie.FILM_ANNEE}
                        </option>
                    ))}

                </select>
            </label>
            <button onClick={filterclick}>
                Submit
            </button>

            <div>
                {movie.map(movie => (
                    <div key={movie} style={{ margin: "10px" }}>
                        <MovieCard movie={movie} />
                        <br />
                    </div>
                ))}
            </div>
        </div>
    } else {
        return <div className="Movies">
            <label>
                Genre
                <select value={genre} onChange={handleChangeGenre}>
                    <option>
                        All
                    </option>
                    {uniqueGenre.map(movie => (
                        <option>
                            {movie.FILM_GENRE}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Année
                <select value={date} onChange={handleChangeDate}>
                    <option>
                        All
                    </option>
                    {uniqueDate.map(movie => (

                        <option>
                            {movie.FILM_ANNEE}
                        </option>
                    ))}

                </select>
            </label>
            <button onClick={filterclick} >
                Submit
            </button>
            <div>
                {movies.slice(0, 8).map(movie => (
                    <div key={movie} style={{ margin: "10px" }}>
                        <MovieCard movie={movie} />
                        <br />
                    </div>
                )
                )}
            </div>
        </div>
    }

}

export default MovieList;
