import React from 'react';
import './Funding.css';
import Logo from './Logo';

function Funding() {
  return (
    <div className="Logo">
      <Logo />
      <div className="Funding">
        <div className="Funding-page"> : Accueil : Financer votre projet</div>
        <div className="funding-text">
          <h1 className="funding-main-title">
            UN FONDS D'AIDE POUR LA CREATION ET LA PRODUCTION AUDIOVISUELLE ET
            CINEMATOGRAPHIQUE
          </h1>
          <h4 className="funding-second-title">
            En partenariat avec le CNC (Centre national du cinéma et de l'image
            animée), la Région Sud aide à la création et à la production
            d'oeuvres cinématographiques et audiovisuelles de qualité dans toute
            leur diversité. Des aides à l'écriture, en développement et en
            production sont proposées selon les types de projet. Les aides à
            l'écriture, versées directement aux auteurs, prennent la forme de
            bourses d'écriture.
          </h4>
        </div>
        <div className="funding-columns-container">
          <div className="first-funding-column-container">
            <div className="funding-column animation-column">Animation</div>
            <div className="funding-column short-film-column">
              Court-métrage
            </div>
            <div className="funding-column documentary-column">
              Documentaire
            </div>
          </div>
          <div className="second-funding-column-container">
            <div className="funding-column long-film-column">Long-métrage</div>
            <div className="funding-column television-fiction-column">
              Fiction Télévisée
            </div>
          </div>
          <div className="third-funding-column-container">
            <div className="funding-column web-creation-column">
              Web-création
            </div>
            <div className="funding-column works-column">
              Oeuvres immersives
              <p>ou interactives</p>
            </div>
            <div className="funding-column project-column">projets groupés</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Funding;
