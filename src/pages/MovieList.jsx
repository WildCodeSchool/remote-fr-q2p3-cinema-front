import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import Movies from '../components/movies/MovieCard';
// import Movies from '../components/movies/Movies';
import Modale from '../components/movies/Modale';
// import LogiqueModale from '../components/movies/LogiqueModale';
import Modal from './Modal';
import './MovieList.css'


function MovieList() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState("All");
    const [date, setDate] = useState("All");
    // const [modalOpen, setModalOpen] = useState(false);
    // const { revele, toggle } = LogiqueModale();
    const [openModal, setOpenModal] = useState({});
    const [openId, setOpenId] = useState(null);


    


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/movies/subventions')
            .then((res) => res.data)
            .then((data) => setMovies(data))
    }, [movies])

    // function showModal(id) {
    //     setOpenModal(true);
    // }
  
    // const showModal = id => {
    //     setOpenModal(true);
    //     setOpenId(id)
    // }

    const showModal = id => {
        setOpenModal(prevOpenModal => ({
          ...prevOpenModal,
          [id]: !prevOpenModal[id]
        }));
      };

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
                {movie.map((m) => (
                    <div key={m.id} style={{ margin: "10px" }}>
                        <button onClick={ () => showModal(m)}>open</button>
                         <Modal id={m.id} showModal={openModal} hideModal={hideModal}>
                <div className="modalHeader">
                    <h2>Réalisateur: {m.FILM_REALISATEUR}</h2>
                </div>
                <div className="modalBody">
                    <h3>Titre 2</h3>
                </div>
                <div className="modalFooter">
                    <button className="modalBtn">Fermer</button>
                </div>    
            </Modal>                       
                        <div className="MovieCard">
                        
                        {/* <Modale revele={revele} cache={toggle} movie={movie}/> */}
                           <div className="movie-container">
                           <div className="movie-content">
                           {/* <button className="openModalBtn" onClick={() => {setModalOpen(true);}}>
                              <h1 className="movie-title" className="openModalBtn">{movie.FILM_TITRE}</h1>
                              {modalOpen && <Modale setOpenModal={setModalOpen}>Bonjour</Modale>}</button> */}
                                 <li>Réalisateur: {m.FILM_REALISATEUR}</li>                                
                                 <li>Année:{m.FILM_ANNEE}</li>
                                 <li>Genre:{m.FILM_GENRE}</li>
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
        {/* <div className="MovieCard">
        <Modale revele={revele} cache={toggle} />
          <div className="movie-container">
              <div className="movie-content">
              <Link to={{ pathname: '/movies/cards' }}>
                <h1 className="movie-title">{movie.FILM_TITRE}</h1>
                </Link>
                    <li>Réalisateur: {movie.FILM_REALISATEUR}</li>
                    <li>Année:{movie.FILM_ANNEE}</li>
                    <li>Genre:{movie.FILM_GENRE}</li>
              </div>
          </div>  
        </div> */}
        </div>
    }

}

export default MovieList;
