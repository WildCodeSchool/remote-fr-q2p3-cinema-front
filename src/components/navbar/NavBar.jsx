import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/LOGO-2-QUADRI.png';
import './NavBar.css';

function NavBar() {
    return (
        <div className="NavBar">
            <div className="navigation-logo">
                <a href="/">< img className="n-logo" src={logo} alt="n-logo" /></a>
            </div>
            <div className="navigation-bar" >
                <Link  className="navigation-link" to="/"></Link>
                <Link  className="navigation-link" to="/Financer" >FINANCER VOTRE PROJET</Link>
                < p className="separation"></p>
                <Link  className="navigation-link"to="/Tourner en region">TOURNER EN RÉGION</Link>
                < p className="separation"></p>
                <Link  className="navigation-link" to = "Films_soutenues" >FILMS SOUTENUS</Link>

            </div>
        </div>
    )
} 
export default NavBar;
