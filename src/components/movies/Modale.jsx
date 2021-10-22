// import React from 'react';

// const Modale = ({ revele, cache, movie }) =>

//   revele ? (
//     <React.Fragment>
//       <div className="overlay" />

//       <div className="wrapper">
//         <div className="modal">
//           <button type="button" className="close" onClick={cache}>
//             <span>&times;</span>
//           </button>
//           <div className="MovieCard">
//           <div className="movie-container">
//               <div className="movie-content">
//                 <h1 className="movie-title">{movie.FILM_TITRE}</h1>
//                 <h2 className="movie-details">Fiche Technique</h2>
//                     <li>Réalisateur: {movie.FILM_REALISATEUR}</li>
//                     <li>Producteur:{movie.FILM_PRODUCTEUR}</li>
//                     <li>Commune:{movie.FILM_COMMUNE}</li>
//                     <li>Année:{movie.FILM_ANNEE}</li>
//                     <li>Genre:{movie.FILM_GENRE}</li>
//                     <li>Format:{movie.FILM_FORMAT}</li>
//                 <h3 className="movie-subventions">Subventions</h3>
//                     <div className="movie-subcentions-details">
//                     <li>Type:{movie.SUBVENTION_TYPEAIDE}</li>
//                     <li>Année:{movie.SUBVENTION_ANNEE}</li>
//                     <li>Montant région:{movie.SUBVENTION_MONTANT_REGION}</li>
//                     <li>Budget prévisionnel:{movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</li>
//                     </div>
//               </div>
//           </div>  
//         </div>
//         </div>
//       </div>
//     </React.Fragment>
//   ) : null;
  
//   export default Modale;

import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './Modale.css'

function Modale({setOpenModal}) {
  // const [movies, setMovies] = useState([]);
  // const titleFilm = props.match.params.FILM_TITRE;
 

  // useEffect(() => {
  //     axios
  //         .get(`http://localhost:8000/api/movies/subventions/${titleFilm}`)
  //         .then((res) => res.data)
  //         .then((data) => setMovies(data))
  // }, [titleFilm])

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1></h1>
        </div>
        <div className="body">
          <p></p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Modale
