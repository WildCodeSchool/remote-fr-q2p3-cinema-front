import React from 'react';

function ContactCard({finance}) {
    return ( 


    <div className="table-header">

        <div className="header-container">

            <div className="contact column">Contact</div>
            <div className="téléphone column">Téléphone</div>
            <div className="mail column">Mail</div> 
            <div className="web column">web</div>
            <div className="commune column">Commune</div>
            <div className="interco column">Interco</div>
            <div className="dept column">Dept</div>
            <div className="region column">Region</div>

        </div>

        <div className="table-content">

            <div className="FIN_STRUCTURE">{finance.FIN_CONTACT}</div> 
            <div className="FIN_STRUCTURE">{finance.TELEPHONE}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_MAIL}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_WEB}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_COMMUNE}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_INTERCO}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_DEPT}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_REGION}</div>

        </div> 
        <div>  
            <p className="phrase">
                ANNUAIRE DES AIDES DISPONNIBLES EN REGION
            </p>
        </div>
    </div>   

           

     


        

        
        






 
    )
}

export default ContactCard;

