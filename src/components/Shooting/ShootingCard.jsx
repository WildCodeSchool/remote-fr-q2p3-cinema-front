import React from 'react';
import './ShootingCard.scss';
import ShootingCardItems from './ShootingCardItems';
import decorImage from '../assets/vue.jpg';
import talentImage from '../assets/talent.jpg';
import conseilsImage from '../assets/conseils.jpg';
import contactImage from '../assets/contact.jpg';
import annuaireImage from '../assets/annuaire.jpg';

function ShootingCard({ title }) {
  const decors = {
    title: 'Des décors hors du commun',
    image: decorImage,
  };
  const talent = {
    title: 'Des talents remarquables',
    image: talentImage,
  };
  const annuaire = {
    title: 'Un annuaire complet',
    image: annuaireImage,
  };
  const conseil = {
    title: 'Des aides précieuses',
    image: conseilsImage,
  };
  const contact = {
    title: 'Des contacts à votre service',
    image: contactImage,
  };

  

  return (
    <div className="ShootingCard">
      <ShootingCardItems {...talent} />
      <ShootingCardItems {...annuaire} />
      <ShootingCardItems {...decors} />
      <ShootingCardItems {...conseil} />
      <ShootingCardItems {...contact} />
    </div>
  );
}

export default ShootingCard;
