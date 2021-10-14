import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FinanceCard from './FinanceCard';
import './FinanceCard.css';

function Financement() {

    const [finances,setFinances]=useState([]);

    useEffect(() => {
            axios
            .get('http://localhost:8000/api/financements')
            .then((res) => res.data)
            .then((data) => setFinances(data))
            
    }, [])
    return (
        <div className="Finance">
            {finances.map((finance, index) => 
             <div key={index}> 
              <FinanceCard finance={finance} />
             </div>
             )}
            

        </div>
    )
}

export default Financement;
