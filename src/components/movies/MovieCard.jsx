import React from 'react'
import { Link } from 'react-router-dom';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div className="MovieCard">
          <div className="movie-container">
              <div className="movie-content">
                <h1 className="movie-title">{movie.FILM_TITRE}</h1>
                {/* <h2 className="movie-details">Fiche Technique</h2> */}
                    <li>Réalisateur: {movie.FILM_REALISATEUR}</li>
                    {/* <li>Producteur:{movie.FILM_PRODUCTEUR}</li> */}
                    {/* <li>Commune:{movie.FILM_COMMUNE}</li> */}
                    <li>Année:{movie.FILM_ANNEE}</li>
                    <li>Genre:{movie.FILM_GENRE}</li>
                    {/* <li>Format:{movie.FILM_FORMAT}</li> */}
                {/* <h3 className="movie-subventions">Subventions</h3>
                    <div className="movie-subcentions-details">
                    <li>Type:{movie.SUBVENTION_TYPEAIDE}</li>
                    <li>Année:{movie.SUBVENTION_ANNEE}</li>
                    <li>Montant région:{movie.SUBVENTION_MONTANT_REGION}</li>
                    <li>Budget prévisionnel:{movie.SUBVENTION_BUDGETPREVISIONNEL_FILM}</li>
                    </div> */}
              </div>
          </div>  
        </div>
    )
}


export default MovieCard
