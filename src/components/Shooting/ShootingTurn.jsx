import React from 'react'
import './ShootingTurn.css'
import ShootingTurnCard from './ShootingTurnCard'
import togetherImage from '../assets/together.jpg'
import tournageImage from '../assets/tournage.jpg'
import portraitImage from '../assets/photo.jpg'


function ShootingTurn() {

    const together = {
        title: "Ça s'est tourné près de chez vous",
        lien: 'filmfrance.net',
        image: togetherImage,
      }
    const tournage = {
        title: "Tableau prévisionnel des tournages",
        image: tournageImage,
    }
    const portrait = {
        title: "Interviews",
        lien: "séances-speciales.fr",
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
