import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState("");
    const [date, setDate] = useState("");

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
    function selecter() {

    }
    const handleChangeGenre = (event) => {
        setGenre(event.target.value)
    };
    const handleChangeDate = (event) => {
        setDate(event.target.value)
    };

    function filter() {
        if (genre === "" || date === "") {
            if (genre === "") {
                return movies.FILM_GENRE === genre
            }
            if (date = "") {
                return movies.FILM_ANNEE === date
            }
        }
        if (genre === "" && date === "") {
            return movies.FILM_GENRE && movies.FILM_ANNEE
        }
    }
    return (
        <div className="Movies" >

            <label>
                Genre
                <select value={genre} onChange={handleChangeGenre}>
                    <option>

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

                    </option>
                    {uniqueDate.map(movie => (

                        <option>
                            {movie.FILM_ANNEE}
                        </option>
                    ))}

                </select>
            </label>
            <button onClick={filter}>
                Submit
            </button>
            {/* <div>
                {filterDropdown.map(movie => (
                    <div key={movie} style={{ margin: "10px" }}>
                        <MovieCard movie={movie} />
                        <br />
                    </div>
                ))}
            </div>
            // <div>
            //     {filterDropdowndate.map(movie => (
            //         <div key={movie} style={{ margin: "10px" }}>
            //             <MovieCard movie={movie} />
            //             <br />
            //         </div>
            //     ))}
            // </div> */}

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
