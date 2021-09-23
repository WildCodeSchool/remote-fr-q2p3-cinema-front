import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Logo.css';

function Logo() {
    let iconStyles = {color: "black", fontSize: "2em", marginLeft: "95%" }
    return (
        <div className="Logo">
             <Link to={{pathname:'/'}}><FaHome style={iconStyles}/></Link>
        </div>
    )
}

export default Logo;
