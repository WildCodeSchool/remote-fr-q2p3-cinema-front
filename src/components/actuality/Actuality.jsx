import React from 'react';
import image1 from '../../images/bloc1.jpg'
import image2 from '../../images/bloc2.jpg'
import image3 from '../../images/bloc3.jpg'
import './Actuality.css';

function Actuality() {
    return (
        <div className="Actuality">
            <div className="actuality-container">
            <h1 className="actuality-title">ACTUALITES A LA UNE</h1>
                <div className="main-actuality-container">
                <div className="container-1">
                <img id="logo" src={image1} alt='Logo-2-blanc' width="100%" height="180"/>
                </div>
                <div className="container-2">
                <img id="logo" src={image2} alt='Logo-2-blanc' width="100%" height="180"/>
                </div>
                <div className="container-3">
                <img id="logo" src={image3} alt='Logo-2-blanc' width="100%" height="180"/>
                </div>
                </div>
                <div className="container-4">
                <img id="logo" src={image1} alt='Logo-2-blanc' width="97%" height="280"/>
                </div>
            </div>
        </div>
    )
}

export default Actuality;
