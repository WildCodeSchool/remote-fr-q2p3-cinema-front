import React, { useState, useEffect } from 'react';
import './FundingList';
import Funding from './Funding';
import axios from 'axios';

function FundingList() {
  const [fundings, setFundings] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/financements')
      .then((res) => res.data)
      .then((data) => setFundings(data));
  }, []);

  return (
    <div className="FundingList">
      {fundings.map((funding) => (
        <div key={funding.id}>
          <Funding funding={funding} />
        </div>
      ))}
    </div>
  );
}

export default FundingList;
