import React, {useEffect,useState} from 'react';
import axios from 'axios';
import FaqCards from './FaqCards';
import './FaqCards.css';

function Faq() {

    const [faqs,setFaqs]=useState([]);

    useEffect(() => {
            axios
            .get('http://localhost:8000/api/financements')
            .then((res) => res.data)
            .then((data) => setFaqs(data))
            
    }, [])
    return (
        <div className="Faq">
            {faqs.map((faq, index) => 
             <div key={index}> 
              <FaqCards faq={faq} />
             </div>
             )}
            

        </div>
    )
}

export default Faq;