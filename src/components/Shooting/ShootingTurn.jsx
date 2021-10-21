import React from 'react'
import './ShootingTurn.css'
import ShootingTurnCard from './ShootingTurnCard'
import togetherImage from '../assets/together.jpg'
import tournageImage from '../assets/tournage.jpg'
import portraitImage from '../assets/tournage.jpg'


function ShootingTurn() {

    const together = {
        title: "ça s'est tourné près de chez moi",
        lien: 'filmfrance.net',
        image: togetherImage,
      }
    const tournage = {
        title: "évisionnel des tournages",
        image: tournageImage
    }
    const portrait = {
        title: "Interviews",
        lien: "seances-specieales.fr",
        image: portraitImage
    }

    return (
        <div className="ShootingTurn">
            <ShootingTurnCard {...together}/>
            <ShootingTurnCard {...tournage}/>
            <ShootingTurnCard {...portrait}/>
        </div>
    )
}

export default ShootingTurn
