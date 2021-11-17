import React from 'react';
import Logo from '../Funding/Logo';
import "./About.css";

function About() {
    return (
        <div className="About">
            <Logo />
            <h1 className="title-about">À Propos</h1>
            <div className="about-content">
                Ce projet à été créer par les élèves Wild Code School Christophe Michaud, Yoann Mauline, Karim Kameli, Benjamin Bonnet et Anne Marziale.
            </div>
        </div>
    )
}

export default About;
