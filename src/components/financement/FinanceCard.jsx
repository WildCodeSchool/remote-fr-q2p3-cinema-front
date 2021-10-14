import React from 'react';

function FinanceCard({finance}) {
    return (
 
        <div className="sideleft">

            <div className="structure">Structure</div>
            <div className="FIN_STRUCTURE">{finance.FIN_STRUCTURE}</div> 
            <div className="formats">Formats</div>
            <div className="FIN_STRUCTURE">{finance.FIN_FORMATS}</div> 
            <div className="descriptif">Descriptifs</div>
            <div className="FIN_STRUCTURE">{finance.FIN_DESCRIPTIF}</div> 
            <div className="contact">Contact</div>
            <div className="FIN_STRUCTURE">{finance.FIN_CONTACT}</div> 
            <div className="téléphone">Téléphone</div>
            <div className="FIN_STRUCTURE">{finance.TELEPHONE}</div> 
            <div className="mail">Mail</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_MAIL}</div> 
            <div className="mail">web</div>
            <div className="FIN_STRUCTURE">{finance.FIN_WEB}</div> 
            <div className="insee">N° insee</div>  
            <div className="FIN_STRUCTURE">{finance.FIN_COMMUNE_INSEE}</div> 
            <div className="commune">Commune</div>
            <div className="FIN_STRUCTURE">{finance.FIN_COMMUNE}</div>
            <div className="interco">Interco</div>
            <div className="FIN_STRUCTURE">{finance.FIN_INTERCO}</div>
            <div className="dept">Dept</div>
            <div className="FIN_STRUCTURE">{finance.FIN_DEPT}</div>
            <div className="region">Region</div>
            <div className="FIN_STRUCTURE">{finance.FIN_REGION}</div>

           
        </div>

        

        
        






 
    )
}

export default FinanceCard;
