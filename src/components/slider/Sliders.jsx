import React from 'react';
import Slider from 'react-slick';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

function Sliders() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <div className="Slider">
      <div className="image-container-carousel">
        <h1 className="title-carousel">
          Votre portail Région Sud<p>Cinéma Audiovisuel</p>
        </h1>
        <div className="greetings-carousel">François Lefebvre / France TV
        </div>
        <Slider {...settings}>
          <div className="slide">
            <img className="image" alt="image1" src={image1} />
          </div>
          <div className="slide">
            <img className="image" alt="image2" src={image2} />
          </div>
          <div className="slide">
            <img className="image" alt="image4" src={image4} />
          </div>
          <div className="slide">
            <img className="image" alt="image5" src={image5} />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;
