import React from 'react';
import logo from '../../images/LOGO-2-BLANC.png';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  let iconStyles = {color: "#FFFF", textDecoration: "none"}
    return (
        <div className="Footer">
        <section className="footer-logo" id="logo">
        <img id="logo" src={logo} alt='Logo-2-blanc' width="215" height="125"/>
        </section>
        <div className="footer-columns-container">
          <div className="footer-column footer-column-about">
            <h4 className="footer-main-title">
              RÉGION SUD
              <p>PROVENCE-ALPES-CÔTE D'AZUR</p>
            </h4>
            <h4 className="footer-title">Hôtel de Région</h4>
            <ul className="footer-text">
              <li>27, place Jules Guesde</li>
              <li>1381 Marseille Cedex 20</li>
            </ul>
          </div>
          <div className="footer-column footer-column-contact">
            <div className="footer-contact">
              <h4 className="footer-title">Du lundi au vendredi</h4>
              <ul className="footer-contact-text">
                <li>De 9 h à 17 h sans interruption</li>
                <li>04 91 57 50 57</li>
              </ul>
            </div>
            <div className="footer-contact-button">
              <p>CONTACTER LA RÉGION</p>
            </div>
          </div>
          <div className="footer-column footer-column-social">
            <h4 className="footer-title">Liens utiles</h4>
            <ul className="footer-useful-links">
              <li>Subventions régionales</li>
              <li>Sud Marchés Publics</li>
            </ul>
          </div>
        </div>
        <div className="greetings-footer">
        <ul className="greetings-footer-content">
              <li>Plan de site</li>
              <li>Mentions légales</li>
              <li>Données personnelles </li>
              <li>En savoir plus sur les cookies</li>
              <li>Flux RSS</li>
              <li>Logo Région Sud</li>
              <li>Recrutement</li>
              <li>Gestion des cookies</li>
              <Link className="about-footer" to={{ pathname:'/about'}} style={iconStyles}>
              À Propos
              </Link>
            </ul>
        </div>
      </div>
    )
}

export default Footer;
