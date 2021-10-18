import React from 'react';
import Actuality from './Actuality';
import './ActualityCard.css';
import image1 from '../../images/bloc1.jpg';
import image2 from '../../images/bloc2.jpg';
import image3 from '../../images/bloc3.jpg';

function ActualityCard() {
  const pic1 = {
    title: 'Dépôt de dossier',
    image: image1,
  };

  const pic2 = {
    title: 'En octobre, les 20 ans de UFTC!',
    image: image2,
  };

  const pic3 = {
    title: 'Reprise des Rencontres du Pôle',
    image: image3,
  };


  return (
    <div className="ActualityList">
      <h3 className="section-title ActualityList-title">ACTUALITES A LA UNE</h3>
      <div className="cards-container">
        <Actuality {...pic1} />
        <Actuality {...pic2} />
        <Actuality {...pic3} />
      </div>
    
    </div>
  );
}

export default ActualityCard;
