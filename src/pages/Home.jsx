import React from 'react';
import Slider from '../components/slider/Sliders';
import ActualityCard from '../components/actuality/ActualityCard';

function Home() {
  return (
    <div className="Home">
      <Slider />
      <ActualityCard />
    </div>
  );
}

export default Home;
