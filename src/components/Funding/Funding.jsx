import React from 'react';
import './Funding.css';

function Funding({ funding }) {
  return <div className="Funding">
    <h1>{funding.FIN_FORMATS}</h1>
  </div>;
}

export default Funding;
