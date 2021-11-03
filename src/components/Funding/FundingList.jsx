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
        </div>
 
      <div className="FundingList">
        {fundings.map((funding) => (
          <div key={funding.id}>
            <div className="funding-column" onClick={() => showModal(funding.id)}>{funding.FIN_FORMATS}</div>
            <Funding
              showModal={openModal}
              hideModal={hideModal}
              funding={funding}
            >
              <div className="modalBodyTitle">
                {/* <h3>LONG MÉTRAGE</h3>
                <div className="text-modal-funding">
                  {' '}
                  Ce fond répond à des modalités pratiques des aides à
                  l'écriture, au développement et à la production des oeuvres
                  cinématographiques de fiction de longue durée. Encadrées par
                  la réglementation européenne, ces aides s'inscrivent dans la
                  convetion de partenariat avec le Centre national du cinéma et
                  de l'image animée (CNC) et son définies par le cadre
                  d'intervention adopté par la Région.
                </div> */}
              </div>
              <div className="modalBodyFin">
                <div className="wrapper">
                <p>{funding.FIN_FORMATS}</p>
                <p>{funding.FIN_DESCRIPTIF}</p>
                <div className="contact-funding">
                   
                  <p>{funding.FIN_CONTACT}</p>
                <p>{funding.FIN_MAIL}</p>
                <p>{funding.FIN_TELEPHONE}</p>
                </div>
                <p>{funding.FIN_WEB}</p>
                <p>{funding.FIN_COMMUNE_INSEE}</p>
                <p>{funding.FIN_COMMUNE}</p>
                <p>{funding.FIN_INTERCO}</p>
                <p>{funding.FIN_DEPT}</p>
                <p>{funding.FIN_REGION}</p> 
                <div className="faq-button">FAQ</div>
                <button className="close">x</button>
              </div>
              </div>
              <div className="modalFooter">
              </div>
            </Funding>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default FundingList;
