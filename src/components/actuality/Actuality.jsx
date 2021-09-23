import React from 'react';
import './Actuality.css';

function Actuality({ image, title }) {
  return (
    <div className="Actuality">
      <div className="actuality-container">
        <div className="main-actuality-container">
          <img className="actuality-img" src={image} alt="" />
        </div>
        <div className="second-actuality-container"></div>
        <div className="actuality-title">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Actuality;
