import React from 'react';
import home from '../../images/home-48.png'
import './FilmInTheRegion.css';


function FilmInTheRegion() {
    return (
        <div className="FilmInTheRegion">
                <div className="home">
                   <a href="/"> <img src={home} alt="accueil"/> </a>
                </div>
        </div>     
    )
}

export default FilmInTheRegion;
