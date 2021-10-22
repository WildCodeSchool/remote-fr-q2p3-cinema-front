import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import BacImg from '../components/assets/BAC Nord.jpg';
import BacVid from '../components/assets/videos/Bac Nord ba.mp4';
import './MovieList.css'


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

            <div>
                {movie.map((movie) => (
                    <div key={movie.id} style={{ margin: "10px" }}>
                    <button onClick={ () => showModal(movie.id)}>open</button>    
                         <Modal showModal={openModal} hideModal={hideModal} movie={movie}>
                        <div className="Modal">
                        <div className="modalHeader">
                            <h2>{movie.FILM_TITRE}</h2>
                            <img className="modal-img" src={BacImg} all="Bac Nord" />
                            <video controls autoPlay currentTime={11.3} src={BacVid} />
                        </div>
                            <div className="modalBody">
                            <h3>Fiche Technique</h3>
                            <p>Réalisateur: {movie.FILM_REALISATEUR}</p>
                            <p>Producteur:{movie.FILM_PRODUCTEUR}</p> 
                            <p>Commune:{movie.FILM_COMMUNE}</p>
                            <p>Année:{movie.FILM_ANNEE}</p>
                            <p>Genre:{movie.FILM_GENRE}</p>
                            <p>Format:{movie.FILM_FORMAT}</p>
                            <h3 className="modal-subventions">Subventions</h3>
                            <div className="modal-subventions-details">
                            <p>Type:{movie.SUBVENTION_TYPEAIDE}</p>
                            <p>Année:{movie.SUBVENTION_ANNEE}</p>
                            <p>Montant région:{movie.SUBVENTION_MONTANT_REGION}</p>
                            <p>Budget prévisionnel:{movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</p>
                            </div>
                            </div>
                        <div className="modalFooter">
                        <button className="modalBtn">Fermer</button>
                        </div>
                    </div>    
                        </Modal>                       
                        <div className="MovieCard">
                        
                        {/* <Modale revele={revele} cache={toggle} movie={movie}/> */}
                           <div className="movie-container">
                           <div className="movie-content">
                           {/* <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>
                              {modalOpen && <Modale setOpenModal={setModalOpen}>Bonjour</Modale>}</button> */}
                              <h1 className="movie-title" className="openModalBtn">{movie.FILM_TITRE}</h1>
                                 <li>Réalisateur: {movie.FILM_REALISATEUR}</li>                                
                                 <li>Année:{movie.FILM_ANNEE}</li>
                                 <li>Genre:{movie.FILM_GENRE}</li>
                            </div>
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
            <div>
                {movies.slice(0, 8).map(movie => (
                    <div key={movie.id} style={{ margin: "10px" }}>
                        <button onClick={ () => showModal(movie.id)}>open</button>
                        <Modal showModal={openModal} hideModal={hideModal} movie={movie}>
                        <div className="Modal">
                        <div className="modalHeader">
                            <h2>{movie.FILM_TITRE}</h2>
                            <img className="modal-img" src={BacImg} all="Bac Nord" />
                            <video controls autoPlay currentTime={11.3} src={BacVid} />
                        </div>
                            <div className="modalBody">
                            <h3>Fiche Technique</h3>
                            <p>Réalisateur: {movie.FILM_REALISATEUR}</p>
                            <p>Producteur:{movie.FILM_PRODUCTEUR}</p> 
                            <p>Commune:{movie.FILM_COMMUNE}</p>
                            <p>Année:{movie.FILM_ANNEE}</p>
                            <p>Genre:{movie.FILM_GENRE}</p>
                            <p>Format:{movie.FILM_FORMAT}</p>
                            <h3 className="modal-subventions">Subventions</h3>
                            <div className="modal-subventions-details">
                            <p>Type:{movie.SUBVENTION_TYPEAIDE}</p>
                            <p>Année:{movie.SUBVENTION_ANNEE}</p>
                            <p>Montant région:{movie.SUBVENTION_MONTANT_REGION}</p>
                            <p>Budget prévisionnel:{movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</p>
                            </div>
                            </div>
                        <div className="modalFooter">
                        <button className="modalBtn">Fermer</button>
                        </div>
                        </div>    
                        </Modal> 
                        <div className="MovieCard">
                        {/* <Modale revele={revele} cache={toggle} /> */}
                           <div className="movie-container">
                           <div className="movie-content">
                              <h1 className="movie-title">{movie.FILM_TITRE}</h1>
                                 <li>Réalisateur: {movie.FILM_REALISATEUR}</li>
                                 <li>Année:{movie.FILM_ANNEE}</li>
                                <li>Genre:{movie.FILM_GENRE}</li>
                            </div>
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
