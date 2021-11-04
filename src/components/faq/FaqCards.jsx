import React from 'react';

function FaqCards({faq}) {
    return ( 

    <div className="table-header">

        <div className="header-container">

            <div className="structure column">Structure</div>
            <div className="formats column">Formats</div>
            <div className="descriptif column">Descriptifs</div>
            <div className="commune column">Commune</div>
            <div className="interco column">Interco</div>
            <div className="dept column">Dept</div>
            <div className="region column">Region</div>

        </div>

        <div className="table-content">

            <div className="FIN_STRUCTURE">{faq.FIN_STRUCTURE}</div> 
            <div className="FIN_STRUCTURE">{faq.FIN_FORMATS}</div> 
            <div className="FIN_STRUCTURE">{faq.FIN_DESCRIPTIF}</div> 
            <div className="FIN_STRUCTURE">{faq.FIN_COMMUNE}</div>
            <div className="FIN_STRUCTURE">{faq.FIN_INTERCO}</div>
            <div className="FIN_STRUCTURE">{faq.FIN_DEPT}</div>
            <div className="FIN_STRUCTURE">{faq.FIN_REGION}</div>

        </div> 

     

           
</div>
    
    )
}

export default FaqCards;