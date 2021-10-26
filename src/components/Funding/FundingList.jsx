import React, { useState, useEffect } from 'react';
import './FundingList.css';
import axios from 'axios';
import Logo from './Logo';
import Funding from './Funding';
function FundingList() {
  const [fundings, setFundings] = useState([]);
  const [openModal, setOpenModal] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/financements')
      .then((res) => res.data)
      .then((data) => setFundings(data));
  }, []);

  const showModal = (id) => {
    setOpenModal(id);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="Logo">
      <Logo />

      <div className="FundingList">
        {fundings.map((funding) => (
          <div key={funding.id}>
            <button onClick={() => showModal(funding.id)}>open</button>
            <Funding
              showModal={openModal}
              hideModal={hideModal}
              funding={funding}
            >
              <div className="modalHeader"></div>
              <div className="modalBodyTitle">
                <h3>LONG MÉTRAGE</h3>
                <div className="text-modal-funding">
                  {' '}
                  Ce fond répond à des modalités pratiques des aides à
                  l'écriture, au développement et à la production des oeuvres
                  cinématographiques de fiction de longue durée. Encadrées par
                  la réglementation européenne, ces aides s'inscrivent dans la
                  convetion de partenariat avec le Centre national du cinéma et
                  de l'image animée (CNC) et son définies par le cadre
                  d'intervention adopté par la Région.
                </div>
              </div>
              <div className="modalBody">
                <p>Réalisateur: {funding.FILM_FORMAT}</p>
              </div>
              <div className="modalFooter">
                <button className="modalBtn">Fermer</button>
              </div>
            </Funding>
          </div>
        ))}

        <div className="Funding">
          <div className="funding-text">
            <div className="Funding-page"> Accueil Financer votre projet</div>
            <h1 className="funding-main-title">
              UN FONDS D'AIDE POUR LA CREATION ET LA PRODUCTION AUDIOVISUELLE ET
              CINEMATOGRAPHIQUE
            </h1>
            <h4 className="funding-second-title">
              En partenariat avec le CNC (Centre national du cinéma et de
              l'image animée), la Région Sud aide à la création et à la
              production d'oeuvres cinématographiques et audiovisuelles de
              qualité dans toute leur diversité. Des aides à l'écriture, en
              développement et en production sont proposées selon les types de
              projet. Les aides à l'écriture, versées directement aux auteurs,
              prennent la forme de bourses d'écriture.
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
              <div className="funding-column long-film-column">
                Long-métrage
              </div>
              <div className="funding-column television-fiction-column">
                Fiction Télévisée
              </div>
            </div>
            <div className="third-funding-column-container">
              <div className="funding-column web-creation-column">
                Web-création
              </div>
              <div className="funding-column works-column">
                Oeuvres immersives ou intéractives
              </div>
              <div className="funding-column project-column">
                Projets groupés
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FundingList;
