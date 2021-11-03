import React from 'react';
import landingMountain from '../assets/landingMountain.jpg';
import landingCity from '../assets/landingCity.jpg';
import landingMap from '../assets/landingMap.jpg';
import './Landing.scss'
function Landing({texte}) {
  return (
    <div className="Landing">
      <div className="landing-contain">
        <img src={landingMountain} alt="montagne" className="landingCard"/>
        <h2 className='landing-text'>Figurer le monde</h2>
      </div>
      <div className="landing-contain">
        <img src={landingCity} alt="ville" className="landingCard"/>
        <h2 className='landing-text'>6 types de décors subaquatiques</h2>
      </div>
      <div className="landing-contain">
        <img src={landingMountain} alt="montagne" className="landingCard"/>
        <h2 className='landing-text'>Le littoral</h2>
      </div>
      <div className="landing-contain">
        <img src={landingMap} alt="carte" className="landingCard"/>
        <h2 className='landing-text'>Les villes "film friendly"</h2>
      </div>
    </div>
  );
}

export default Landing;
