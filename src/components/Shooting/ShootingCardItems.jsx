import React from 'react'
import './ShootingCardItems.scss'

function ShootingCardItems({title, image}) {
    return (
        <div className="ShootingCardItems">
            {/* <div className="cardItems"> */}
                <img src={image} alt="" className="imageItem" />
                <h2 className="titleItem">{title}</h2>
            {/* </div> */}
            
        </div>
    )
}

export default ShootingCardItems
