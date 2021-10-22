// import React, { useState, useEffect } from 'react';
// import Modale from './Modale';
// import axios from 'axios';

// function MovieCardList(props) {
//     const [movies, setMovies] = useState([]);
//     const titleFilm = props.match.params.FILM_TITRE;

//     useEffect(() => {
//         axios
//             .get(`http://localhost:8000/api/movies/subventions/${titleFilm}`)
//             .then((res) => res.data)
//             .then((data) => setMovies(data))
//     }, [titleFilm])
//     return (
//         <div>
//           {movies.map((movie) => (
//           <div key={movie.id}>
//             <Modale movie={movie} />
//           </div>
//           )
//             <div className="movie-content">
//                 <h1 className="movie-title">{movies.FILM_TITRE}</h1>
//                 <h2 className="movie-details">Fiche Technique</h2>
//                     <li>Réalisateur: {movies.FILM_REALISATEUR}</li>
//                     <li>Producteur:{movies.FILM_PRODUCTEUR}</li>
//                     <li>Commune:{movies.FILM_COMMUNE}</li>
//                     <li>Année:{movies.FILM_ANNEE}</li>
//                     <li>Genre:{movies.FILM_GENRE}</li>
//                     <li>Format:{movies.FILM_FORMAT}</li> 
//                     <h3 className="movie-subventions">Subventions</h3>
//                     <div className="movie-subcentions-details">
//                     <li>Type:{movies.SUBVENTION_TYPEAIDE}</li>
//                     <li>Année:{movies.SUBVENTION_ANNEE}</li>
//                     <li>Montant région:{movies.SUBVENTION_MONTANT_REGION}</li>
//                     <li>Budget prévisionnel:{movies.SUBVENTION_BUDGETPREVISIONNEL_FILM}</li>
//                     </div>
//               </div>
//         </div>
//     )
// }

// export default MovieCardList

