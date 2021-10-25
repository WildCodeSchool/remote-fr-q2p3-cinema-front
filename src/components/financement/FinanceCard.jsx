import React from 'react';

function FinanceCard({finance}) {
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

            <div className="FIN_STRUCTURE">{finance.FIN_STRUCTURE}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_FORMATS}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_DESCRIPTIF}</div> 
            <div className="FIN_STRUCTURE">{finance.FIN_COMMUNE}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_INTERCO}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_DEPT}</div>
            <div className="FIN_STRUCTURE">{finance.FIN_REGION}</div>

        </div> 

     

           
</div>
     


        

        
        






 
    )
}

export default FinanceCard;
