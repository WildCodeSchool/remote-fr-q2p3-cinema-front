import React from 'react';
import landingMountain from '../assets/landingMountain.jpg';
import landingCity from '../assets/landingCity.jpg';
import landingMap from '../assets/landingMap.jpg';
import './Landing.scss'
function Landing() {
  return (
    <div className="Landing">
      <img src={landingMountain} alt="montagne" className="landingCard"/>
      <img src={landingCity} alt="ville" className="landingCard"/>
      <img src={landingMountain} alt="montagne" className="landingCard"/>
      <img src={landingMap} alt="carte" className="landingCard"/>
    </div>
  );
}

export default Landing;
