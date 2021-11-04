import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO-2-QUADRI.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <div className="navigation-logo">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" width="165" height="90" />
        </Link>
      </div>
      <div className="navigation-bar">
        <Link className="navigation-link" to="/Funding">
          FINANCER VOTRE PROJET
        </Link>
        <div className="separation"></div>
        <Link className="navigation-link" to="/Shooting">
          TOURNER EN REGION
        </Link>
        <div className="separation"></div>
        <Link className="navigation-link" to="/Movies">
          FILMS SOUTENUS
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
