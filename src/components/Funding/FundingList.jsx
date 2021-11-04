import React, { useState, useEffect } from 'react';
import './FundingList.css';
import axios from 'axios';
import Logo from './Logo';
import Funding from './Funding';
import { Link } from 'react-router-dom';

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

  let iconStyles = {color: "rgb(92, 92, 92)", textDecoration: "none" }
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
            En partenariat avec le CNC (Centre national du cinéma et de l'image
            animée), la Région Sud aide à la création et à la production
            d'oeuvres cinématographiques et audiovisuelles de qualité dans toute
            leur diversité. Des aides à l'écriture, en développement et en
            production sont proposées selon les types de projet. Les aides à
            l'écriture, versées directement aux auteurs, prennent la forme de
            bourses d'écriture.
          </h4>
        </div>
      </div>

      <div className="FundingList">
        {fundings.map((funding) => (
          <div key={funding.id}>
            <div
              className="funding-column"
              onClick={() => showModal(funding.id)}
            >
              {funding.FIN_FORMATS}
            </div>
            <Funding
              showModal={openModal}
              hideModal={hideModal}
              funding={funding}
            >
              <div className="modalBodyFin">
                <div className="wrapper">
                  <div className="props-content">
                    <h2 className="title-use-doc">DOCUMENTS UTILES</h2>
                    {/* <p className="props-funding">{funding.FIN_FORMATS}</p> */}
                    <p className="props-funding">{funding.FIN_STRUCTURE}</p>
                    <h2 className="title-help-fund">
                      DEMANDE D'AIDE FINANCIERE
                    </h2>
                    <p className="props-funding">{funding.FIN_DESCRIPTIF}</p>
                    <p className="props-funding">{funding.FIN_CONTACT}</p>
                    <p className="props-funding">{funding.FIN_TELEPHONE}</p>
                    <Link to={{pathname:'/faq'}} style={iconStyles}>
                    <p>Demande d'aide financière</p>
                    </Link>
                    <p className="props-funding">{funding.FIN_MAIL}</p>
                    <h2 className="title-contact">CONTACT</h2>
                    <p className="props-funding funding-email">
                      {' '}
                      Email : {funding.FIN_WEB}
                    </p>
                    <p className="props-funding">{funding.FIN_COMMUNE_INSEE}</p>
                    <p className="props-funding">{funding.FIN_COMMUNE}</p>
                    <p className="props-funding">{funding.FIN_INTERCO}</p>
                    <p className="props-funding">{funding.FIN_DEPT}</p>
                  </div>
                  <div className="second-modal-part">
                    <div className="modalBodyTitle">
                      <h3 className="h3-title">LONG MÉTRAGE</h3>
                      <div className="text-modal-funding">
                        Ce fond répond à des modalités pratiques des aides à
                        l'écriture, au développement et à la production des
                        oeuvres cinématographiques de fiction de longue durée.
                        Encadrées par la réglementation européenne, ces aides
                        s'inscrivent dans la convetion de partenariat avec le
                        Centre national du cinéma et de l'image animée (CNC) et
                        son définies par le cadre d'intervention adopté par la
                        Région.
                      </div>
                    </div>
                    <div className="second-text-modal">
                      <p className="text-1">
                        <p className="comity-title">1# Comité de lecture</p>
                        <p>
                          Date limite de dépôt des dossiers : 30 septembre 2019
                        </p>
                        Date du comité de lecture : 12 décembre 2020
                      </p>
                      <p className="text-2">
                        <p className="comity-title">2# Comité de lecture</p>
                        <p>
                          Date limite de dépôt des dossiers : 30 janvier 2020
                        </p>
                        Date du comité de lecture : 25 mars 2020
                      </p>
                      <p className="text-3">
                        <p className="comity-title">3# Comité de lecture</p>
                        <p>Date limite de dépôt des dossiers : 30 avril 2020</p>
                        Date du comité de lecture : 6 juillet 2020
                      </p>
                    </div>
                  </div>
                    <div className="faq-button">FAQ</div>
                  <button className="close">×</button>
                </div>
              </div>
              <div className="modalFooter"></div>
            </Funding>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FundingList;
