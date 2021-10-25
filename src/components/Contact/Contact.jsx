import React, {useEffect,useState} from 'react';
import axios from 'axios';
import ContactCard from './ContactCard';
import './ContactCard.css';

function Contact() {

    const [contacts,setContacts]=useState([]);

    useEffect(() => {
            axios
            .get('http://localhost:8000/api/financements')
            .then((res) => res.data)
            .then((data) => setContacts(data))
            
    }, [])
    return (
        <div className="Contact">
            {contacts.map((finance, index) => 
             <div key={index}> 
              <ContactCard finance={finance} />
             </div>
             )}
            

        </div>
    )
}

export default Contact;