import React from 'react';
import Logo from '../Funding/Logo';
import "./About.css";

function About() {
    return (
        <div className="About">
            <Logo />
            <h1 className="title-about">À Propos</h1>
            <div className="about-content">
                Ce projet à été créer par la Wild Code School ....
            </div>
        </div>
    )
}

export default About;
