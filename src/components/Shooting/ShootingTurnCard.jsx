import React from 'react'
import './ShootingTurnCard.scss'

function ShootingTurnCard({title, lien, image}) {
    return (
        <div className="ShootingTurnCard">
            <img src={image} alt="" />
            <div className="TurnCard">
                <h2>{title}</h2>
                <p>{lien}</p>
            </div>      
        </div>
    )
}

export default ShootingTurnCard
