import React from 'react';
import ShootingCard from './ShootingCard';
import './Shooting.scss'

function Shooting() {
  return (
    <div className="Shooting">
      <h1>TOUTES LES SOLUTIONS POUR PREPARER VOTRE TOURNAGE</h1>

      <p>
        Terre de tournages, Provence-Alpes-Côte-d'Azur offre une infinité
        d'atouts grâce à ses magnifiques décors, a la qualité de ses
        professionnels et à son fond de soutien au cinéma et à l'audiovisuel.
      </p>

      <p>
        Avec 5 000 jours de tournage chaque année, la Région sud est la 2e en
        France pour l'acceuil de tournages. Les retombées directs des tournages
        sont estimées à plus de 130 000 000 € par an.{' '}
      </p>

      <p>
        Le réseau de l'acceuil des tournages, qui maille tout le territoire, est
        à votre service pour vos recherches de décors, vos recrutements, vos
        autorisations, les questions pratiques et logistiques.
      </p>
      <div className="shooting-container">
          <ShootingCard />
      </div>
      <h1 className="decorTitle">La région met en valeur ses décors</h1>

      </div>

  );
}

export default Shooting;
