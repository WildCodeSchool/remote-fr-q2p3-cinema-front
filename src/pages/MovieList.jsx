import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import BacImg from '../components/assets/BAC Nord.jpg';
import BacVid from '../components/assets/videos/Bac Nord ba.mp4';
import './MovieList.scss'

function MovieList() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState("All");
    const [date, setDate] = useState("All");
    const [openModal, setOpenModal] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/movies/subventions')
            .then((res) => res.data)
            .then((data) => setMovies(data))
    }, [movies])

    const showModal = id => {
        setOpenModal(id);
    }

    const hideModal = () => {
        setOpenModal(false);
    }

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
            <div className="MovieContent">
                {movie.map((movie) => (
                    <div key={movie.id} style={{ margin: "10px" }} className="movieCards"> 
                         <Modal showModal={openModal} hideModal={hideModal} movie={movie}>
                    <div className="Modal">
                        <div className="modalHeader">
                            <h2>{movie.FILM_TITRE}</h2>
                            <img className="modal-img" src={BacImg} all="Bac Nord" />
                            <video controls currentTime={11.3} src={BacVid} />
                        </div>
                            <div className="modalBody">
                            <h3>Fiche Technique</h3>
                            <p className="p1">Réalisateur: {movie.FILM_REALISATEUR}</p>
                            <p>Producteur:{movie.FILM_PRODUCTEUR}</p> 
                            <p className="p1">Commune: {movie.FILM_COMMUNE}</p>
                            <p>Année :{movie.FILM_ANNEE}</p>
                            <p className="p1">Genre: {movie.FILM_GENRE}</p>
                            <p>Format: {movie.FILM_FORMAT}</p>
                            <h3 className="modal-subventions">Subventions</h3>
                            <div className="modal-subventions-details">
                            <p className="p1">Type: {movie.SUBVENTION_TYPEAIDE}</p>
                            <p>Année:{movie.SUBVENTION_ANNEE}</p>
                            <p className="p1">Montant région: {movie.SUBVENTION_MONTANT_REGION}</p>
                            <p>Budget prévisionnel: {movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</p>
                            </div>
                            </div>
                            <button className="modalBtn">Fermer</button>
                    </div>    
                        </Modal>                       
                        <div className="MovieCard">
                              <h1 className="movie-title" className="openModalBtn" onClick={ () => showModal(movie.id)}>{movie.FILM_TITRE}</h1>
                              <div className="movie-details">
                                 <p>Réalisateur: {movie.FILM_REALISATEUR}</p>                                
                                 <p>Année: {movie.FILM_ANNEE}</p>
                                 <p>Genre: {movie.FILM_GENRE}</p>
                              </div>                                 
                        </div>
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
            <div className="MovieContent">
                {movies.slice(0, 8).map(movie => (
                    <div key={movie.id} style={{ margin: "10px" }} className="movieCards">
                        <Modal showModal={openModal} hideModal={hideModal} movie={movie}>
                    <div className="Modal">
                            <div className="modalHeader">
                            <h2>{movie.FILM_TITRE}</h2>
                            <img className="modal-img" src={BacImg} all="Bac Nord" />
                            <video controls currentTime={11.3} src={BacVid} />
                            </div>
                            <div className="modalBody">
                            <h3>Fiche Technique</h3>
                            <p className="p1">Réalisateur: {movie.FILM_REALISATEUR}</p>
                            <p>Producteur:{movie.FILM_PRODUCTEUR}</p> 
                            <p className="p1">Commune: {movie.FILM_COMMUNE}</p>
                            <p>Année: {movie.FILM_ANNEE}</p>
                            <p className="p1">Genre: {movie.FILM_GENRE}</p>
                            <p>Format: {movie.FILM_FORMAT}</p>
                            <h3 className="modal-subventions">Subventions</h3>
                            <div className="modal-subventions-details">
                            <p className="p1">Type: {movie.SUBVENTION_TYPEAIDE}</p>
                            <p>Année: {movie.SUBVENTION_ANNEE}</p>
                            <p className="p1">Montant région: {movie.SUBVENTION_MONTANT_REGION}</p>
                            <p>Budget prévisionnel: {movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</p>
                            </div>
                            </div>
                            <button className="modalBtn">Fermer</button>
                    </div>    
                        </Modal> 
                        <div className="MovieCard">
                              <h1 className="movie-title" onClick={ () => showModal(movie.id)}>{movie.FILM_TITRE}</h1>
                              <div className="movie-details">
                                <p>Réalisateur: {movie.FILM_REALISATEUR}</p>
                                <p>Année: {movie.FILM_ANNEE}</p>
                                <p>Genre: {movie.FILM_GENRE}</p>
                              </div>
                        </div>
                        <br />
                    </div>
                )
                )}
            </div>
        </div>
    }

}

export default MovieList;
