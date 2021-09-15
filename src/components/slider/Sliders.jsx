import React from "react";
import Slider from "react-slick";
import image1 from '../../images/1.jpg'
import image3 from '../../images/3.jpg';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.jpg';
import image7 from '../../images/7.jpg';
import image9 from '../../images/9.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slider.css';

function Sliders() {

    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 6500,
      pauseOnHover: true
    };
    return (

      <div>
        <div className="image-container-carousel">
        <Slider {...settings}>
          <div>
          <img className="image" alt='image1' src={image1} />
          </div>
          <div>
          <img className="image" alt='image3' src={image3} />
          </div>
          <div>
          <img className="image" alt='image5' src={image5} />
          </div>
          <div>
          <img className="image" alt='image6' src={image6} />
          </div>
          <div>
          <img className="image" alt='image7' src={image7} />
          </div>   
          <div>
          <img className="image" alt='image9' src={image9} />
          </div>
        </Slider>
        </div>
      </div>
    )
  }

export default Sliders;